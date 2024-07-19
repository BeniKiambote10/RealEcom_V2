import React from "react";
import "./Home.css";
import "../components/Carousel.css";
import CarouselComponent from "../components/Carousel"; // Import the carousel component
import video from "../image/202407181906 (1).mp4";

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
      </section>

      <section className="carousel-section">
        <CarouselComponent /> {/* Add more*/}
      </section>
    </div>
  );
};

export default HomePage;
