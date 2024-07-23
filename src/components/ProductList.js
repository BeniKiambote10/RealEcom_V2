import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../CartContext"; // Import CartContext for using cart functionality
import "./ProductList.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS for icons

const ProductList = ({ products, searchText }) => {
  // State to store price range for filtering products
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  // State to store filtered products based on search and price range
  const [filteredProducts, setFilteredProducts] = useState([]);
  // Get addToCart function from CartContext
  const { addToCart } = useContext(CartContext);

  // useEffect hook to filter products whenever products, searchText, or priceRange change
  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => {
        const matchesName = product.name
          .toLowerCase()
          .includes(searchText.toLowerCase());
        const matchesPrice =
          product.price >= priceRange.min && product.price <= priceRange.max;
        return matchesName && matchesPrice;
      })
    );
  }, [products, searchText, priceRange]);

  // Handle changes in price range inputs
  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: value,
    }));
  };

  // Handle add to cart action with prompt
  const handleAddToCart = (product) => {
    const confirmAdd = window.confirm(
      `Are you sure you want to add ${product.name} to the cart?`
    );
    if (confirmAdd) {
      addToCart(product);
      alert("Added to Cart");
    }
  };

  return (
    <div>
      <h1>
        Our <span>Products</span>
      </h1>

      <div className="price-filter">
        <h2 className="filter-heading">Filter By Price </h2>
        <label>
          <span className="price-label">Min Price:</span>
          <div className="input-icon">
            <i className="fas fa-dollar-sign"></i>
            <input
              type="number"
              name="min"
              value={priceRange.min}
              onChange={handlePriceChange}
            />
          </div>
        </label>
        <label>
          <span className="price-label">Max Price:</span>
          <div className="input-icon">
            <i className="fas fa-dollar-sign"></i>
            <input
              type="number"
              name="max"
              value={priceRange.max}
              onChange={handlePriceChange}
            />
          </div>
        </label>
      </div>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={`${product.image}`} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
