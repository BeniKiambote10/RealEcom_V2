import React from "react";
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you have the correct path
import "bootstrap/dist/css/bootstrap.min.css";
import logoImage from "../image/bono-high-resolution-logo-white-transparent.png"; // Adjust the path accordingly
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="foot">
      <div className="foot-bar">
        <div className="first-info">
          <a href="/Users/r2h/Desktop/my-portfolio2/src/Pages/Home.css">
            <img
              src={logoImage} // Use the imported logoImage here
              alt="Logo-footer"
            />
          </a>
          <p>BONO@Gmail.com</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook-f"></i> {/* fab for Facebook */}
            </a>
            <a href="https://twitter.com/?lang=en">
              <i className="fab fa-twitter"></i> {/* fab for Twitter */}
            </a>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i> {/* fab for Instagram */}
            </a>
            <a href="https://github.com/">
              <i className="fab fa-github"></i> {/* fab for GitHub */}
            </a>
            <a href="https://www.linkedin.com/home">
              <i className="fab fa-linkedin-in"></i> {/* fab for LinkedIn */}
            </a>
          </div>
        </div>

        <div className="second-info">
          <a href="#" target="_blank">
            <h4>Support</h4>
          </a>
          <a href="contact.html" target="_blank">
            <p>Contact Us</p>
          </a>
        </div>

        {/* Adjust the content of the third-info div as needed */}
        <div className="third-info"></div>
      </div>
    </footer>
  );
};

export default Footer;
