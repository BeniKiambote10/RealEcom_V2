import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import "../components/ProductList.css";

const ProductsPage = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:3000/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <form className="searchBoxCon">
        <input
          type="text"
          name="searchForm"
          id="searchBox"
          placeholder="Search Product..."
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>
      <ProductList products={filteredProducts} searchText={searchText} />
    </div>
  );
};

export default ProductsPage;
