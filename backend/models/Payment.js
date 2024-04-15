import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    transcationId: {
      type: String,
      required: true,
    },
    bookAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Payment", paymentSchema);
