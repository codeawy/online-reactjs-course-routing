import { Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = ({ isAllowed }) => {
  if (!isAllowed) return <Navigate to="/" replace />;

  return (
    <div className="container mx-auto m-10">
      <LoginForm />
    </div>
  );
};

export default Login;
