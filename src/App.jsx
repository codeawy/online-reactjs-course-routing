import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PageNotFound from "./pages/PageNotFound";
import routes from "./routes/routes";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Navbar from "./layout/Navbar";
import Login from "./pages/Login";

const App = () => {
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
            <ProtectedRoute isAllowed={true} redirectTo={"/"}>
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
