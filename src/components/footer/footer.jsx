import React from "react";
import "./footer.css";
import "./../landing/landing.css";
import sendMail from "./../../assets/footer/sendMail.png";
import Email from "./../../assets/footer/Email.png";
import { navLinks } from "../../helpers/navbar.helpers";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="upperFooter">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              fontSize: "35px",
              marginBottom: "13px",
            }}
          >
            Subscribe to our weekly newsletter
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <input name type="email" placeholder="Your Email" />
            <img
              src={sendMail}
              alt="sendMail.svg"
              style={{
                width: "25px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>

        <img
          src={Email}
          alt="Email.png"
          style={{
            width: "450px",
          }}
        />
      </div>

      <div className="lowerFooter">
        <div>
          <h1>Bee Store</h1>
          <span>
            Your favourite honey store. Get <br /> delicious honey today!!!
          </span>
        </div>

        <div>
          <h3>Usefull Links</h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            {navLinks &&
              navLinks.map((link, index) => {
                return <NavLink to={link.href}>{link.tag}</NavLink>;
              })}
          </div>
        </div>

        <div>
          <h3>Terms & Condition</h3>
        </div>

        <div>
          <h3>lets chat</h3>

          <div>
            <span>test@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
