import React, { useState, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import Items from "./components/shop/Items";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import Load from "./loader/Load";

import "./App.css";
import Team from "./pages/team/Team";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";

const Auth = lazy(() => import("./components/Auth/Auth"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Landing = lazy(() => import("./Landing"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Error = lazy(() => import("./pages/error/Error"));

export default function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MantineProvider>
      <Notifications position="top-right" zIndex={1000} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact="true"
            element={
              <React.Suspense fallback={<Load />}>
                <Landing />
              </React.Suspense>
            }
          />
          <Route
            path="/about-us"
            element={
              <React.Suspense fallback={<Load />}>
                <AboutUs />
              </React.Suspense>
            }
          />
          <Route path="/shop" exact="true" element={<Items />} />

          <Route
            path="/auth"
            exact="true"
            element={
              <React.Suspense fallback={<Load />}>
                <Auth />
              </React.Suspense>
            }
          />

          {/* Forgot Password */}
          <Route
            path="/forgot"
            exact="true"
            element={
              <React.Suspense fallback={<Load />}>
                <ForgotPassword />
              </React.Suspense>
            }
          />

          <Route
            path="/contact-us"
            element={
              <React.Suspense fallback={<Load />}>
                <Contact />
              </React.Suspense>
            }
          />

          <Route
            path="/team"
            element={
              <React.Suspense fallback={<Load />}>
                <Team />
              </React.Suspense>
            }
          />
          <Route path="/cart" exact="true" element={<Cart />} />

          {/* Error page */}
          <Route
            path="*"
            element={
              <React.Suspense fallback={<Load />}>
                <Error />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
