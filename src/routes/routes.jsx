import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Navbar from "../layout/Navbar";

const routes = [
  {
    path: "/",
    component: <h1>Home Page</h1>,
    isAllowed: true,
    redirectTo: "/",
  },
  {
    path: "/dashboard",
    component: <h1>Dashboard</h1>,
    isAllowed: false,
    redirectTo: "/",
  },
];

export default routes;
