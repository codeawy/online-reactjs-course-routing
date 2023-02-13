import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Layout from "./layout/layout";
import Routing from "./pages/Routing";
import PageNotFound from "./pages/PageNotFound";
import ProductsLayout from "./layout/ProductsLayout";
import SingleProductPage from "./pages/SingleProductPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="routing" element={<Routing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProductPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
