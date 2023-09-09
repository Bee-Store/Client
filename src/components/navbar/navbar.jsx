import React from "react";
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="navContainer">
      <span>Bee Store</span>

      {/* For Links */}
      <div>
        <a href="#">Testing</a>
      </div>

      {/* For navbuttons */}
      <div>
        <button>Cart</button>
        <button>Login</button>
      </div>
    </div>
  );
}
