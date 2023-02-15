import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Layout from "./layout/layout";
import Routing from "./pages/Routing";
import PageNotFound from "./pages/PageNotFound";
import SingleProductPage from "./pages/SingleProductPage";
import routes from "./routes/routes";

const App = () => {
  return (
    <div className="container mx-auto">
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.component} />
        ))}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
