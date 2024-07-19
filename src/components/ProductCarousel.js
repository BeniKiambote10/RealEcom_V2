import React from "react";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Product(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h4>
        {props.name} <FontAwesomeIcon icon={faHeart} className="heart-icon" />
      </h4>
      <p className="price">{props.price}</p>
      <p className="des">{props.description}</p>
      <p>
        <button>Quick Add</button>
      </p>
    </div>
  );
}
