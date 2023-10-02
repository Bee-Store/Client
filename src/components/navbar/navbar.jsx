import React, { useState } from "react";
import { Burger } from "@mantine/core";
import SideBar from "../Sidebar/SideBar";
import { NavLink, useNavigate } from "react-router-dom";

import { navLinks } from "./../../helpers/navbar.helpers";
import "./navbar.css";
import mail from "./../../assets/landing/mail.svg";
import call from "./../../assets/landing/call.svg";
import locate from "./../../assets/landing/locate.svg";
import clock from "./../../assets/landing/clock.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const access_token = localStorage.getItem("access_token");
  const LoginOrLogOut = !access_token ? (
    <button
      className="loginbtn"
      onClick={() => {
        navigate("/auth");
      }}
    >
      Login
    </button>
  ) : (
    <button
      className="loginbtn"
      onClick={() => {
        navigate("/auth");
      }}
    >
      Log Out
    </button>
  );
  const [isOpen, setIsOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!open);
  };
  const navData =
    navLinks &&
    navLinks.map((link, index) => {
      return (
        <NavLink to={link.href} key={index}>
          {link.tag}
        </NavLink>
      );
    });

  const openNav =
    open === true ? (
      <div className="navLinkResponsive hideNav">
        {navData}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {LoginOrLogOut}
        </div>
      </div>
    ) : null;

  const title = open ? "Close navigation" : "Open navigation";
  return (
    <div className="nav-wrapper">
      <div className="top-wrapper">
        <div>
          <div>
            <img src={locate} alt={locate} />
            <span>
              {" "}
              <strong> Nairobi, Kenya</strong>
            </span>
          </div>

          <div>
            <img src={clock} alt={clock} />
            <span>
              {" "}
              <strong> Open 24/7</strong>
            </span>
          </div>
        </div>

        <div>
          <div>
            <img src={call} alt={call} />
            <span>
              {" "}
              <strong> +254 793 020496</strong>
            </span>
          </div>

          <div>
            <img src={mail} alt={mail} />
            <span>
              {" "}
              <strong>icikakennedy@gmail.com</strong>{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="navContainer">
        <NavLink
          to={"/"}
          style={{
            textDecoration: "none",
          }}
        >
          Bee Store
        </NavLink>

        <div
          style={{
            display: "flex",
            gap: "1em",
          }}
        >
          <button className="tbn show-only">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 42 40"
              fill="none"
            >
              <g clipPath="url(#clip0_64_217)">
                <path
                  d="M36.7336 10.2188L34.732 20.6719C34.5669 21.5354 34.089 22.3164 33.3815 22.8788C32.674 23.4413 31.7818 23.7496 30.8602 23.75H11.8289L12.5508 27.5H30.1875C30.9663 27.5 31.7275 27.7199 32.3751 28.132C33.0226 28.544 33.5273 29.1297 33.8253 29.8149C34.1233 30.5002 34.2013 31.2542 34.0493 31.9816C33.8974 32.709 33.5224 33.3772 32.9717 33.9017C32.4211 34.4261 31.7195 34.7832 30.9557 34.9279C30.1919 35.0726 29.4002 34.9984 28.6807 34.7146C27.9612 34.4307 27.3462 33.9501 26.9136 33.3334C26.4809 32.7167 26.25 31.9917 26.25 31.25C26.2501 30.8238 26.3279 30.4009 26.4797 30H16.8328C16.9846 30.4009 17.0624 30.8238 17.0625 31.25C17.0637 31.855 16.9111 32.4514 16.6179 32.9881C16.3246 33.5248 15.8993 33.986 15.3784 34.3322C14.8574 34.6785 14.2562 34.8995 13.6261 34.9765C12.9959 35.0535 12.3556 34.9841 11.7597 34.7744C11.1639 34.5646 10.6301 34.2206 10.2041 33.7718C9.77808 33.3229 9.47241 32.7826 9.31318 32.1969C9.15396 31.6111 9.14591 30.9974 9.28972 30.4081C9.43354 29.8188 9.72494 29.2713 10.1391 28.8125L5.59453 5H2.625C2.2769 5 1.94306 4.8683 1.69692 4.63388C1.45078 4.39946 1.3125 4.08152 1.3125 3.75C1.3125 3.41848 1.45078 3.10054 1.69692 2.86612C1.94306 2.6317 2.2769 2.5 2.625 2.5H5.59453C6.2072 2.50128 6.80011 2.70662 7.27054 3.08044C7.74096 3.45427 8.05927 3.97304 8.17031 4.54688L8.97422 8.75H35.4375C35.6291 8.75038 35.8182 8.79121 35.9913 8.86957C36.1644 8.94792 36.317 9.06184 36.4383 9.20312C36.5652 9.33997 36.6577 9.50254 36.7089 9.6785C36.7601 9.85447 36.7685 10.0392 36.7336 10.2188Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_64_217">
                  <rect width="42" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span onClick={toggle}>Cart</span>
            <SideBar isOpen={isOpen} toggle={toggle} />

            <h3>3</h3>
          </button>
          <Burger
            className="burger"
            opened={open}
            onClick={() => setOpen((o) => !o)}
            title={title}
          />
        </div>
        {/* For Links */}
        <div className="navLinks">{navData}</div>

        {/* For navbuttons */}
        <div className="navBtn">
          <button className="tbn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 42 40"
              fill="none"
            >
              <g clipPath="url(#clip0_64_217)">
                <path
                  d="M36.7336 10.2188L34.732 20.6719C34.5669 21.5354 34.089 22.3164 33.3815 22.8788C32.674 23.4413 31.7818 23.7496 30.8602 23.75H11.8289L12.5508 27.5H30.1875C30.9663 27.5 31.7275 27.7199 32.3751 28.132C33.0226 28.544 33.5273 29.1297 33.8253 29.8149C34.1233 30.5002 34.2013 31.2542 34.0493 31.9816C33.8974 32.709 33.5224 33.3772 32.9717 33.9017C32.4211 34.4261 31.7195 34.7832 30.9557 34.9279C30.1919 35.0726 29.4002 34.9984 28.6807 34.7146C27.9612 34.4307 27.3462 33.9501 26.9136 33.3334C26.4809 32.7167 26.25 31.9917 26.25 31.25C26.2501 30.8238 26.3279 30.4009 26.4797 30H16.8328C16.9846 30.4009 17.0624 30.8238 17.0625 31.25C17.0637 31.855 16.9111 32.4514 16.6179 32.9881C16.3246 33.5248 15.8993 33.986 15.3784 34.3322C14.8574 34.6785 14.2562 34.8995 13.6261 34.9765C12.9959 35.0535 12.3556 34.9841 11.7597 34.7744C11.1639 34.5646 10.6301 34.2206 10.2041 33.7718C9.77808 33.3229 9.47241 32.7826 9.31318 32.1969C9.15396 31.6111 9.14591 30.9974 9.28972 30.4081C9.43354 29.8188 9.72494 29.2713 10.1391 28.8125L5.59453 5H2.625C2.2769 5 1.94306 4.8683 1.69692 4.63388C1.45078 4.39946 1.3125 4.08152 1.3125 3.75C1.3125 3.41848 1.45078 3.10054 1.69692 2.86612C1.94306 2.6317 2.2769 2.5 2.625 2.5H5.59453C6.2072 2.50128 6.80011 2.70662 7.27054 3.08044C7.74096 3.45427 8.05927 3.97304 8.17031 4.54688L8.97422 8.75H35.4375C35.6291 8.75038 35.8182 8.79121 35.9913 8.86957C36.1644 8.94792 36.317 9.06184 36.4383 9.20312C36.5652 9.33997 36.6577 9.50254 36.7089 9.6785C36.7601 9.85447 36.7685 10.0392 36.7336 10.2188Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_64_217">
                  <rect width="42" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span onClick={toggle}>Cart</span>
            <SideBar isOpen={isOpen} toggle={toggle} />

            <h3>3</h3>
          </button>

          {LoginOrLogOut}
        </div>
      </div>
      {openNav}
    </div>
  );
}
