import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DeleteProduct() {
  const [productId, setProductId] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!productId) {
      setError("Product ID is required.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await axios.delete(
        `http://localhost:5000/deleteProduct/${productId}`
      );

      if (response.status === 200) {
        setSuccess(true);
        setProductId(""); // clear the input field
      } else {
        setError("Failed to delete product.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      setError("An error occurred while deleting the product.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <form onSubmit={handleDelete}>
      <h3>Delete Product</h3>

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

      {error && <div className="alert alert-danger mt-2">{error}</div>}
      {success && (
        <div className="alert alert-success mt-2">
          Product deleted successfully!
        </div>
      )}

      <button type="submit" className="btn btn-danger mt-2" disabled={loading}>
        {loading ? "Deleting..." : "Delete Product"}
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

export default DeleteProduct;
