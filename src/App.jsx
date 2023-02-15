import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PageNotFound from "./pages/PageNotFound";
import routes from "./routes/routes";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Navbar from "./layout/Navbar";
import Login from "./pages/Login";
import { useEffect, useState } from "react";

const App = () => {
  const [accessToken, setAccessToken] = useState(null);
  const token = localStorage.getItem("course-token");

  useEffect(() => {
    setAccessToken(token);
  }, [token]);

  return (
    <div className="container mx-auto">
      <Routes>
        {routes.map((route, idx) => (
          <Route
            exact
            key={idx}
            path={route.path}
            element={
              <ProtectedRoute isAllowed={route.isAllowed} redirectTo={route.redirectTo}>
                <Navbar />
                {route.component}
              </ProtectedRoute>
            }
          />
        ))}
        <Route
          path="/login"
          element={
            <ProtectedRoute isAllowed={!accessToken} redirectTo={"/"}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
