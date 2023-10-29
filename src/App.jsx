import React, { useState, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import Items from "./components/shop/Items";
import Cart from "./components/Cart/Cart";

import Details from "./components/Details/Details";
import Load from "./loader/Load";

import AdminProducts from "./components/Admin/AdminProd";
import AdminHome from "./components/Admin/AdminHome";

import "./App.css";
import Team from "./pages/team/Team";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import ForgotInput from "./pages/forgot-password/ForgotInput";

const Auth = lazy(() => import("./components/Auth/Auth"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Landing = lazy(() => import("./Landing"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Error = lazy(() => import("./pages/error/Error"));

// Admin auth pages
// Admin login page
// import AdminLogin from "./pages/auth/admin/login/AdminLogin";
const AdminLogin = lazy(() => import("./pages/auth/admin/login/AdminLogin"));

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
          <Route path="/adminprod" exact="true" element={<AdminProducts />} />
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
            path="/forgot/reset"
            element={
              <React.Suspense fallback={<Load />}>
                <ForgotInput />
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
          <Route path="/ahome" exact="true" element={<AdminHome />} />
          {/* Error page */}
          <Route
            path="*"
            element={
              <React.Suspense fallback={<Load />}>
                <Error />
              </React.Suspense>
            }
          />

          {/* Admin pages */}
          <Route
            path="/auth/admin/login"
            element={
              <React.Suspense fallback={<Load />}>
                <AdminLogin />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
