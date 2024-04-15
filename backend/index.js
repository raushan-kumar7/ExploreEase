import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import axios from "axios";
import crypto from "crypto";
import bodyParser from "body-parser";

import tourRouter from "./routes/tours.js";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import reviewRouter from "./routes/review.js";
import bookingRouter from "./routes/booking.js";
//import paymentRouter from './routes/payment.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  credentials: true,
};

// Database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database connected...");
  } catch (error) {
    console.log("MongoDB database connection failed!");
  }
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/booking", bookingRouter);
//app.use('/api/v1/payment', paymentRouter);

const salt_key = process.env.SALT_KEY;
const merchant_id = process.env.MERCHANT_ID;

app.post("/api/v1/payment", async (req, res) => {
  try {
    console.log(req.body);

    const merchantTransactionId = req.body.transactionId;
    const data = {
      merchantId: merchant_id,
      merchantTransactionId: merchantTransactionId,
      merchantUserId: req.body.MUID,
      name: req.body.username,
      amount: req.body.amount * 100,
      redirectUrl: `http://localhost:4000/status/?id=${merchantTransactionId}`,
      redirectMode: "POST",
      mobileNumber: req.body.phone,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };
    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString("base64");
    const keyIndex = 1;
    const string = payloadMain + "/pg/v1/pay" + salt_key;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;

    // const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"
    const prod_URL =
      "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

    const options = {
      method: "POST",
      url: prod_URL,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      data: {
        request: payloadMain,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);

        return res.json(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
    });
  }
});

app.post("/status", async (req, res) => {
  const merchantTransactionId = req.query.id;
  const merchantId = merchant_id;

  const keyIndex = 1;
  const string =
    `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;
  const sha256 = crypto.createHash("sha256").update(string).digest("hex");
  const checksum = sha256 + "###" + keyIndex;

  const options = {
    method: "GET",
    url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
      "X-MERCHANT-ID": `${merchantId}`,
    },
  };

  // CHECK PAYMENT TATUS
  axios
    .request(options)
    .then(async (response) => {
      if (response.data.success === true) {
        const url = `http://localhost:3000/success`;
        return res.redirect(url);
      } else {
        const url = `http://localhost:3000/failure`;
        return res.redirect(url);
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

// Start server
app.listen(port, () => {
  connect();
  console.log(`Server is listening on port ${port}`);
});
