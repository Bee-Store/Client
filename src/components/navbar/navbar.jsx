import React from "react";
import { navLinks } from "./../../helpers/navbar.helpers";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navContainer">
      <span>Bee Store</span>

      {/* For Links */}
      <div className="navLinks">
        {navLinks &&
          navLinks.map((link, index) => {
            return (
              <NavLink to={link.href} key={index}>
                {link.tag}
              </NavLink>
            );
          })}
      </div>

      {/* For navbuttons */}
      <div>
        <button>Cart</button>
        <button>Login</button>
      </div>
    </div>
  );
}
