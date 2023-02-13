import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isNaN(productId)) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <span>SingleProductPage</span>
    </div>
  );
};

export default SingleProductPage;

// ** /users?limit=100
