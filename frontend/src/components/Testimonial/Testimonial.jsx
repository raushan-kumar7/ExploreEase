import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipetoSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidersToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider { ...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Explore the testimonials from our satisfied travelers, highlighting
          seamless bookings, remarkable destinations, and impeccable service.
          Trust the experiences shared by our clients for your next
          unforgettable journey.
        </p>
        <div className="d-flex align-item-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Discover firsthand accounts from our valued clientele, sharing their
          memorable adventures and seamless travel experiences. Let their
          testimonials guide you in making informed decisions for your upcoming
          travel plans.
        </p>
        <div className="d-flex align-item-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Gain insights from our esteemed customers' testimonials, illustrating
          their remarkable journeys and the exceptional service they received.
          Let their experiences inspire and inform your travel decisions with
          confidence.
        </p>
        <div className="d-flex align-item-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Explore the testimonials from our satisfied travelers, highlighting
          seamless bookings, remarkable destinations, and impeccable service.
          Trust the experiences shared by our clients for your next
          unforgettable journey.
        </p>
        <div className="d-flex align-item-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Discover firsthand accounts from our valued clientele, sharing their
          memorable adventures and seamless travel experiences. Let their
          testimonials guide you in making informed decisions for your upcoming
          travel plans.
        </p>
        <div className="d-flex align-item-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Gain insights from our esteemed customers' testimonials, illustrating
          their remarkable journeys and the exceptional service they received.
          Let their experiences inspire and inform your travel decisions with
          confidence.
        </p>
        <div className="d-flex align-item-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
