// Importing necessary modules and components
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import "../components/ProductList.css";
import "react-toastify/dist/ReactToastify.css";

const ProductsPage = () => {
  // Initializing state variables
  const [searchText, setSearchText] = useState(""); // For storing the search input
  const [products, setProducts] = useState([]); // For storing the fetched product data

  // useEffect hook to fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        "https://realecom-v2.onrender.com/products"
      ); // Fetching product data from the API  //http://localhost:3000/products
      setProducts(response.data); // Updating the state with the fetched data
    };
    fetchProducts(); // Calling the fetch function
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchText(event.target.value); // Updating the searchText state with the input value
  };

  // Filtering products based on the search input
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // JSX to render the component
  return (
    <div>
      {/* Search form */}
      <form className="searchBoxCon">
        <input
          type="text"
          name="searchForm"
          id="searchBox"
          placeholder="Search Product..."
          value={searchText}
          onChange={handleSearchChange} // Handling input change
        />
      </form>
      {/* Rendering the ProductList component with filtered products */}
      <ProductList products={filteredProducts} searchText={searchText} />
    </div>
  );
};

export default ProductsPage;
