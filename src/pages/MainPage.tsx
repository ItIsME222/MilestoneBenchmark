import Card from "../bootstrap/IndividualCard";
import "../App.css";
import SearchFeature from "../bootstrap/SearchForm";
import { useEffect, useState } from "react";
import axios from "axios";
import Message from "../message";
import { useNavigate } from "react-router-dom";
interface ProductData {
  productId: string;
  Name?: string;
  Category?: string;
  Price: string;
}

function Main() {
  const [productData, setProductData] = useState<ProductData[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/product")
      .then((response) => {
        setProductData(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  return (
    <div>
      <div className="pl-2.5">
        <Message />
        <SearchFeature />
      </div>
      <div className="flex space-x-4">
        {productData?.map((p) => (
          <Card
            key={p.productId}
            id={p.productId}
            title={p.Name || "Default Title"}
            description={p.Category || "Default Description"}
            buttonText="Edit this Product"
            imageURL="https://images.cults3d.com/_Yrr51Q2U757UVYIAY9fyLSReqE=/516x516/filters:no_upscale():format(webp)/https://fbi.cults3d.com/uploaders/32338244/illustration-file/f23d00d1-2861-40af-8e83-1e8f5eda7403/WhatsApp-Image-2024-08-27-at-6.36.25-PM.jpeg"
            price={`Price: ${p.Price || "No price Available"}`}
            onClick={() => navigate(`/EditProduct`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
