import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import "./auth.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { notifications } from "@mantine/notifications";
import { useDispatch, useSelector } from "react-redux"; // import redux hooks
import { fetchCart, syncCart } from "../../features/cart/cartSlice"; // import cart actions
import { setUser } from "../../features/login/loginSlice";

function Auth() {
  const [isActive, setIsActive] = useState(false);
  const [username, setUsername] = useState("");
  // const [loginUsername, setLoginUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const dispatch = useDispatch(); // get the dispatch function
  const cart = useSelector((state) => state.cart); // get the cart state

  function toggleForm() {
    setIsActive(!isActive);
  }

  const navigate = useNavigate();

  // function for registering
  const RegisterFunc = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/auth/register", {
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
  // const LoginFunc = (e) => {
  //   e.preventDefault();
  //   console.log(e)
  //   // Use fetch API to make a POST request
  //   fetch('http://localhost:5000/api/auth/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       username,
  //       password,
  //       tempCart: cart, // Pass the cart state as it is
  //     })
  //   })
  //   .then(response => response.json()) // convert the response to JSON
  //   .then(data => {
  //     console.log('jj')
  //     // Handle the data
  //     console.log("Response:", data);

  //     if (data.data.access_token) {
  //       notifications.show({
  //         title: "Login success",
  //         message: data.message,
  //       });
  //       localStorage.setItem("access_token", data.data.access_token);
  //       dispatch(fetchCart()); // Fetch the cart from the backend after logging in
  //       navigate("/");
  //     }
  //   })
  //   .catch(error => {
  //     // Handle any errors that occurred during the request
  //     console.error("Error:", error);
  //   });
  // };
  const LoginFunc = (e) => {
    e.preventDefault();
    const tempCart = JSON.parse(localStorage.getItem("cart")) || [];
    fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, tempCart }),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.data.access_token) {
        dispatch(setUser({name: data.data.user.username,
          email: data.data.user.email, access_token: data.data.access_token, id: data.data.user._id}))
          notifications.show({ title: "Login success", message: data.message });
          localStorage.removeItem('cart'); // Clear the local storage cart
          dispatch(syncCart()); // Sync the local storage cart with the backend after logging in
          navigate("/");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  // const LoginFunc = (e) => {
  //   e.preventDefault();
  //   console.log(e)
  //   // Get the temporary cart from local storage or Redux state
  //   const tempCart = JSON.parse(localStorage.getItem('cart')) || [];
  //   // Use fetch API to make a POST request
  //   fetch('http://localhost:5000/api/auth/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       username,
  //       password,
  //       tempCart, // Pass the temporary cart
  //     })
  //   })
  //   .then(response => response.json()) // convert the response to JSON
  //   .then(data => {
  //     console.log('jj')
  //     // Handle the data
  //     console.log("Response:", data);

  //     if (data.data.access_token) {
  //       notifications.show({
  //         title: "Login success",
  //         message: data.message,
  //       });
  //       localStorage.setItem("access_token", data.data.access_token);
  //       dispatch(fetchCart()); // Fetch the merged cart from the backend after logging in
  //       navigate("/");
  //     }
  //   })
  //   .catch(error => {
  //     // Handle any errors that occurred during the request
  //     console.error("Error:", error);
  //   });
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
                  type="email"
                  name=""
                  value={email}
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
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
                  <a href="/forgot" onClick={toggleForm}>
                    Forgot Password ?
                  </a>
                </p>
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
                  type="tel"
                  name=""
                  placeholder="Phone Number"
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
                src="https://images.unsplash.com/photo-1644221362205-353214a3124e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHJhdyUyMGhvbmV5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
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
