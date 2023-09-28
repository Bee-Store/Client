import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./contact.css";
import Form from "../../components/contact/Form";
import Message from "../../components/contact/Message";

export default function Contact() {
  return (
    <div>
      <Navbar />

      <div className="contact-wrapper">
        <Message />
        <Form />
      </div>
    </div>
  );
}
