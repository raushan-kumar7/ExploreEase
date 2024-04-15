import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Likely provides functionality to calculate and display weather forecasts, aiding users in effective travel planning and preparation.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Access expert tour guides for enriched travel experiences, providing insightful information and guidance to enhance the journey for travelers.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Travelers can customize their itineraries and experiences, enjoying flexibility and personalized solutions tailored to their preferences through this service.",
  },
];

const ServicesList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" md='6' sm='12' className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServicesList;
