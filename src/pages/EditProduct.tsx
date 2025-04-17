import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditProductManual() {
  const [productId, setProductId] = useState("");
  const [productName, setName] = useState("");
  const [productPrice, setPrice] = useState("");
  const [productCategory, setCategory] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedProduct = {
      productName,
      productPrice,
      productCategory,
      productId,
    };

    try {
      setError("");
      setSuccess(false);
      setLoading(true);

      const res = await axios.put(
        `http://localhost:5000/updateProduct`,
        updatedProduct
      );

      if (res.status === 200) {
        setSuccess(true);
      } else {
        setError("Failed to update product.");
      }
    } catch (err) {
      console.error("Update error:", err);
      setError("An error occurred while updating the product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <h3>Edit Product</h3>

      <div className="form-group">
        <label htmlFor="productId">Product ID</label>
        <input
          type="text"
          className="form-control"
          id="productId"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          required
        />
      </div>

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
        <label htmlFor="productCategory">Description</label>
        <textarea
          className="form-control"
          id="productCategory"
          value={productCategory}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>

      {error && <div className="alert alert-danger mt-2">{error}</div>}
      {success && (
        <div className="alert alert-success mt-2">
          Product updated successfully!
        </div>
      )}
      <button type="submit" className="btn btn-primary mt-2" disabled={loading}>
        {loading ? "Updating..." : "Update Product"}
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

export default EditProductManual;
