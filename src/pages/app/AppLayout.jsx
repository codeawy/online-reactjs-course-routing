import { NavLink, Outlet } from "react-router-dom";
import CookieService from "../../services/CookieService";

const AppLayout = () => {
  const cookies = CookieService.get("user_token");

  const logout = () => {
    CookieService.remove("user_token");
    window.location.reload(true);
  };

  return (
    <>
      <ul className="flex items-center justify-center my-10">
        <li className="mx-3 hover:text-indigo-400 duration-300">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="mx-3 hover:text-indigo-400 duration-300">
          <NavLink to="/about" end>
            About
          </NavLink>
        </li>
        <li className="mx-3 hover:text-indigo-400 duration-300">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="mx-3 hover:text-indigo-400 duration-300">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li className="mx-3 hover:text-indigo-400 duration-300">
          {cookies ? (
            <span className="cursor-pointer" onClick={logout}>
              Logout
            </span>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default AppLayout;
