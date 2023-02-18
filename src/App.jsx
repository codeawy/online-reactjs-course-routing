import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CookieService from "./services/CookieService";

import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Notifications from "./pages/dashboard/Notifications";
import Dashboard from "./pages/dashboard";
import About from "./pages/app/About";
import Contact from "./pages/app/Contact";
import AppLayout from "./pages/app/AppLayout";
import Home from "./pages/app/Home";

const App = () => {
  const cookies = CookieService.get("user_token");

  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout isAllowed={cookies} />}>
          <Route index element={<Dashboard />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="messages" element={<h1>Messages</h1>} />
        </Route>

        <Route path="login" element={<Login isAllowed={!cookies} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
