import React from "react";
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you have the correct path
import "./Contact.css"; // Ensure you have a corresponding CSS file for styling
import logoImage from "../image/bono-high-resolution-logo-black-transparent-3.png";

const ContactForm = () => {
  return (
    <div className="container">
      <div className="left-form">
        <h3 className="heading">Get In Touch With Us!</h3>
        <p className="text">How Can We Help?</p>
        <form action="#">
          <div className="inputform">
            <input
              type="text"
              id="name"
              name="name"
              className="name"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="inputform">
            <input
              type="text"
              id="email"
              name="email"
              className="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="inputform">
            <textarea
              id="message"
              className="message"
              name="message"
              placeholder="Enter Your Message..."
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
      <div className="right-form">
        <div className="visual">
          <img src={logoImage} alt="form picture" />
        </div>
        <div className="contact-info">
          <div className="info-box">
            <div className="text">
              <p>We Are Here For You!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="form-icons">
        <a className="book" href="https://www.facebook.com">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a className="twit" href="https://twitter.com">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a className="gram" href="https://www.instagram.com">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a className="git" href="https://github.com">
          <i className="fa-brands fa-github"></i>
        </a>
        <a className="linked" href="https://www.linkedin.com">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
