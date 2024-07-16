import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";

const ProductList = ({ products, searchText }) => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [filteredProducts, setFilteredProducts] = useState([]);

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

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="price-filter">
        <label>
          Min Price:
          <input
            type="number"
            name="min"
            value={priceRange.min}
            onChange={handlePriceChange}
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            name="max"
            value={priceRange.max}
            onChange={handlePriceChange}
          />
        </label>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <img src={`${product.image}`} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
