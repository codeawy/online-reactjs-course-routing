import Home from "../pages";
import Products from "../pages/Products";
import Routing from "../pages/Routing";

const routes = [
  {
    path: "/",
    component: <Home />,
    isAllowed: true,
    redirectTo: "/",
  },
  {
    path: "/routing",
    component: <Routing />,
    isAllowed: true,
    redirectTo: "/",
  },
  {
    path: "/products",
    component: <Products />,
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
