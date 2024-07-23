// Importing CSS for Carousel styling
import "../components/Carousel.css";

// Importing the Carousel component and its styles
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Importing the Product component and data for the carousel
import Product from "./ProductCarousel.js";
import { productData, responsive } from "../components/dataCarousel.js";

// Function to render the carousel
export default function carousel() {
  // Mapping over productData to create an array of Product components
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="App">
      {/* Header for the carousel */}
      <h1>
        SHOP THE <span>LATEST</span>
      </h1>

      {/* Carousel component with responsive settings and products */}
      <Carousel showDots={false} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
