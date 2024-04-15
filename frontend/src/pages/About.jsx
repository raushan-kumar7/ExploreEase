import React from "react";
import "../styles/about.css";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "./../shared/Subtitle";
import Newsletter from "../shared/Newsletter";
import experienceImg from "../assets/images/experience.png";
import video1 from '../assets/images/video1.mp4';
import video2 from '../assets/images/video2.mp4';

function About() {
  return (
    <>
      <section className="about__section">
        <Container>
          <Row>
            <Col lg="12">
              <h1>About Us</h1>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about__section-second">
        <Container>
          <Row>
            <Col lg="12">
              <h5 className="services__subtitle">About Us</h5>
            </Col>
            <Col lg="6">
              <p className="mt-3">
                Experience the pinnacle of travel planning with Travel World.
                Seamlessly navigate through a comprehensive array of
                destinations, accommodations, and activities, meticulously
                tailored to your preferences. Delve into exhilarating adventures
                or luxuriate in serene retreats, knowing every detail is
                meticulously curated. Explore iconic landmarks, immerse yourself
                in diverse cultures, and create timeless memories. With our
                robust booking platform ensuring secure transactions, your
                journey is not only effortless but also unforgettable. Begin
                your next expedition with confidence and embark on a voyage of
                unparalleled discovery today.
              </p>
            </Col>
            <Col lg="3">
              <div className="about_video-box mt-0">
                <video src={video1} alt="" controls />
              </div>
            </Col>
            <Col lg="3">
              <div className="about_video-box mt-5">
                <video src={video2} alt="" controls />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ============== experience section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Drawing from our vast experience, we are dedicated to
                  providing exceptional <br />
                  service tailored to meet your needs and expectations.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-item-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============== experience section end ============ */}
      <Newsletter />
    </>
  );
}

export default About;
