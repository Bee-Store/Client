import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import "./auth.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { notifications } from "@mantine/notifications";

function Auth() {
  const [isActive, setIsActive] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [tempCart, setTempCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  function toggleForm() {
    setIsActive(!isActive);
  }

  const navigate = useNavigate();

  // function for registering
  const RegisterFunc = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BASE_URL}auth/register`, {
        username,
        password,
        email,
        phoneNumber,
        password_confirmation: passwordConfirmation,
      })
      .then((response) => {
        // Handle the response from the server
        console.log("Response:", response.data);
        notifications.show({
          title: "Account Created",
          message: response.data.message,
        });
        // if (response.data.data.access_token) {
        //   localStorage.setItem("access_token", response.data.data.access_token);
        //   navigate("/");
        // }
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  };

  // Function for logging in
  const LoginFunc = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BASE_URL}auth/login`, {
        username,
        password,
        tempCart,
      })
      .then((response) => {
        // Handle the response from the server
        console.log("Response:", response.data);

        if (response.data.data.access_token) {
          notifications.show({
            title: "Login success",
            message: response.data.message,
          });
          localStorage.setItem("access_token", response.data.data.access_token);
          localStorage.removeItem('cart'); // Clear the temporary cart
          navigate("/");
        }
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  };
  // const LoginFunc = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(`${import.meta.env.VITE_BASE_URL}auth/login`, {
  //       username,
  //       password,
  //     })
  //     .then((response) => {
  //       // Handle the response from the server
  //       console.log("Response:", response.data);

  //       if (response.data.data.access_token) {
  //         notifications.show({
  //           title: "Login success",
  //           message: response.data.message,
  //         });
  //         localStorage.setItem("access_token", response.data.data.access_token);
  //         navigate("/");
  //       }
  //     })
  //     .catch((error) => {
  //       // Handle any errors that occurred during the request
  //       console.error("Error:", error);
  //     });
  // };
  return (
    <div>
      <Navbar />
      <section>
        <div className={`container ${isActive ? "active" : ""}`}>
          <div class="user signinBx">
            <div class="imgBx">
              <img
                src="https://images.unsplash.com/photo-1644221362205-353214a3124e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHJhdyUyMGhvbmV5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div class="formBx">
              <form action="" onSubmit={(e) => LoginFunc(e)}>
                <h2>Sign In</h2>
                <input
                  type="text"
                  name=""
                  value={username}
                  placeholder="Username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />

                <input
                  type="password"
                  name=""
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <input type="submit" name="" value="Login" />
                <p class="signup">
                  Don't have an account ?
                  <a href="#" onClick={toggleForm}>
                    Sign Up.
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div class="user signupBx">
            <div class="formBx">
              <form action="" onSubmit={(e) => RegisterFunc(e)}>
                <h2>Create an account</h2>
                <input
                  type="text"
                  name=""
                  placeholder="Username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <input
                  type="email"
                  name=""
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  type="text"
                  name=""
                  placeholder="Phone number Eg 0704"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
                <input
                  type="password"
                  name=""
                  placeholder="Create Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <input
                  type="password"
                  name=""
                  placeholder="Confirm Password"
                  value={passwordConfirmation}
                  onChange={(e) => {
                    setPasswordConfirmation(e.target.value);
                  }}
                />
                <input type="submit" name="" value="Sign Up" />
                <p class="signup">
                  Already have an account ?
                  <a href="#" onClick={toggleForm}>
                    Sign in.
                  </a>
                </p>
              </form>
            </div>
            <div class="imgBx">
              <img
                src="https://images.unsplash.com/photo-1542243413692-f1939950f4ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJhdyUyMGhvbmV5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Auth;
