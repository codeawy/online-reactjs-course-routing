import { NavLink, Navigate, Outlet } from "react-router-dom";

const DashboardLayout = ({ isAllowed }) => {
  if (!isAllowed) return <Navigate to="/" replace />;

  return (
    <>
      <ul className="flex items-center justify-center my-10">
        <li className="mx-3 hover:text-indigo-400 duration-300">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="mx-3 hover:text-indigo-400 duration-300">
          <NavLink to="/dashboard" end>
            Dashboard
          </NavLink>
        </li>
        <li className="mx-3 hover:text-indigo-400 duration-300">
          <NavLink to="/dashboard/notifications">Notifications</NavLink>
        </li>
        <li className="mx-3 hover:text-indigo-400 duration-300">
          <NavLink to="/dashboard/messages">Messages</NavLink>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default DashboardLayout;
