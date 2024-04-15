// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

// const Payment = ({ tour }) => {
  
//   const navigate = useNavigate();

//   const handleClick = async (e) => {
//     e.preventDefault();
//     console.log("Payment Button Clicked");
//     navigate('/thank-you');
//   }

//   return (
//     <div className="payment">
//             <div className="booking__form">
//         <h5>Information</h5>
//         <Form className="booking__info-form" onSubmit={handleClick}>
//           <FormGroup>
//             <input
//               type="text"
//               placeholder="Full Name"
//               id="fullName"
//               required
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <input
//               type="number"
//               placeholder="Phone"
//               id="phone"
//               required
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup className="d-flex align-items-center gap-3">
//             <input
//               type="date"
//               placeholder=""
//               id="bookAt"
//               required
//               onChange={handleChange}
//             />
//             <input
//               type="number"
//               placeholder="Guest"
//               id="guestSize"
//               required
//               onChange={handleChange}
//             />
//           </FormGroup>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default Payment