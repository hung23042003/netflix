import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-x-4 text-lg font-medium">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-primary" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/movies"}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-primary" : ""
        }
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Navbar;
