import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddNewProduct() {
  const navigate = useNavigate();

  const [productName, setName] = useState("");
  const [productPrice, setPrice] = useState("");
  const [productCategory, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

   
    const newProduct = {
      productName: productName, 
      productPrice: productPrice, 
      productCategory: productCategory, 
    };

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/createProducts",
        newProduct
      );

      if (response.status === 201) {
        alert("Product created successfully!");
        navigate("/"); 
      }
    } catch (error) {
      setError("An error occurred while creating the product.");
      console.error("Error creating product:", error);
    } finally {
      setLoading(false); 
    }
  };


  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="productName"
          value={productName}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="productPrice">Price</label>
        <input
          type="number"
          className="form-control"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="productDescription">Description</label>
        <textarea
          className="form-control"
          id="productDescription"
          value={productCategory}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "Creating..." : "Submit"}
      </button>

      <button
        type="button"
        className="btn btn-secondary ml-2"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </form>
  );
}
export default AddNewProduct;
