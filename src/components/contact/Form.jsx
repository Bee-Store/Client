import React, { useState } from "react";
import "./../../pages/contact/contact.css";
import axios from "axios";
import { notifications } from "@mantine/notifications";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BASE_URL}contact/new`, {
        name,
        email,
        topic,
        message,
      })
      .then((response) => {
        // Handle the response from the server
        console.log("Response:", response.data.message);

        if (response.data.message) {
          notifications.show({
            title: "Message Sent ",
            message: response.data.message,
          });

          setName("");
          setTopic("");
          setEmail("");
          setMessage("");
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  };
  return (
    <div className="form-wrapper">
      <h1>We've been expecting you</h1>

      <form onSubmit={submitForm}>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
          value={email}
            type="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <input
          type="text"
          value={topic}
          placeholder="What is the topic about?"
          onChange={(e) => setTopic(e.target.value)}
        />
        <textarea
          placeholder="Enter your question"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
