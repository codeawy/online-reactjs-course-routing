import { Outlet } from "react-router-dom";

const ProductsLayout = () => {
  return (
    <aside>
      <span>Products layout</span>
      <Outlet />
    </aside>
  );
};

export default ProductsLayout;
