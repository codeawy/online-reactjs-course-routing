import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="my-10">
      <ul className="flex items-center justify-center">
        <li className="mx-3 hover:text-indigo-600 duration-300">
          <NavLink to="/" reloadDocument>
            Home
          </NavLink>
        </li>
        <li className="mx-3 hover:text-indigo-600 duration-300">
          <NavLink to="routing" reloadDocument>
            Routing
          </NavLink>
        </li>
        <li className="mx-3 hover:text-indigo-600 duration-300">
          <NavLink to="about" reloadDocument>
            About
          </NavLink>
        </li>
        <li className="mx-3 hover:text-indigo-600 duration-300">
          <NavLink to="contact" reloadDocument>
            Contact
          </NavLink>
        </li>
        <li className="mx-3 hover:text-indigo-600 duration-300">
          <NavLink to="products">Products</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
