import React from "react";
import "./../../pages/contact/contact.css";

export default function Message() {
  return (
    <div className="message-wrapper">
      <h1>
        Do you have any question about our product, <br /> Shipping or returns?
      </h1>
      <span>
        We will get back to you within 1 or 2 business days after you <br />
        fill in the form
      </span>

      <div className="message-shared">
        <span>Would you rather email us?</span>
        <span>icikakennedy@gmail.com</span>
      </div>

      <div className="message-shared">
        <span>Available Monday - Friday, 9AM - 5AM EST</span>
        <span>Prefer to talk to a friendly staff?</span>

        <span>+254 793 020496</span>
      </div>

      <div className="message-shared">
        <span>Contact Us</span>
        <span
          style={{
            fontSize: "66px",
          }}
        >
          Say Hello!
        </span>
      </div>
    </div>
  );
}
