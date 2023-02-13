import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios.config";

const SingleProductPage = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get(`/products/${productId}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {});
  }, [productId]);

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <span>{product?.description}</span>
    </div>
  );
};

export default SingleProductPage;

// ** /users?limit=100
