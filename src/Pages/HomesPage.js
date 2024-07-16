import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import CarImage from "../image/Untitled design (1).jpg";
import CarImage2 from "../image/Untitled design (2).jpg";
import CarImage3 from "../image/Untitled design (3).jpg";

const HomePage = () => {
  return (
    <div>
      <section className="main-home">
        <div className="main-text">
          <h5>BONO Collections</h5>
          <h1>New Collections</h1>
          <p>Step up your style game</p>
          <a href="/products" className="main-btn">
            Shop Now <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </section>

      <section className="carousel-section">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={CarImage3} alt="First slide" />
            <Carousel.Caption>
              <h3>Be Inovating</h3>
              <p>Express Your Style.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={CarImage2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second Slide Label</h3>
              <p>Details about the second slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={CarImage} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second Slide Label</h3>
              <p>Details about the second slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Add more Carousel.Items as needed */}
        </Carousel>
      </section>
    </div>
  );
};

export default HomePage;
