import React from "react";
import "./../../pages/contact/contact.css"

function Form() {
  const submitForm = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };
  return (
    <div className="form-wrapper">
      <h1>We've been expecting you</h1>

      <form onSubmit={submitForm}>
        <div>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
        </div>

        <input type="text" placeholder="What is the topic about?" />
        <textarea
          placeholder="Enter your question"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
