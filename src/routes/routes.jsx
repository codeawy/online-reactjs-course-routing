import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Navbar from "../layout/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* <Navbar /> */}
        <App />
      </>
    ),
    errorElement: <div>Not Found</div>,
  },
  {
    path: "/home",
    element: (
      <>
        {/* <Navbar /> */}
        <Home />
      </>
    ),
    errorElement: <div>Not Found</div>,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <div>About Error</div>,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <div>Contact Error</div>,
  },
  {
    path: "*",
    element: <div>404 Page not found</div>,
  },
]);

export default router;
