import React from "react";
import "./Home.css";
import "../components/Carousel.css";
import CarouselComponent from "../components/Carousel"; // Import the carousel component
import video from "/Users/r2h/Desktop/my-portfolio2/src/image/202407180853.mp4";

const HomePage = () => {
  return (
    <div>
      <section className="main-home">
        <div className="video-background">
          <video autoPlay muted loop className="video">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

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
        <CarouselComponent /> {/* Add more*/}
      </section>
    </div>
  );
};

export default HomePage;
