import React from "react";
import "./footer.css";
import "./../landing/landing.css";
import sendMail from "./../../assets/footer/sendMail.png";
import Email from "./../../assets/footer/Email.png";

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

      <div className="lowerFooter"></div>
    </div>
  );
}
