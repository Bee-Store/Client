import React, { useState, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./components/shop/Items";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import Auth from "./components/Auth/Auth";

import "./App.css";

const Contact = lazy(() => import("./pages/contact/Contact"));
const Landing = lazy(() => import("./Landing"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

export default function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BrowserRouter>

      <Routes>
        <Route
          path="/"
          exact="true"
          element={
            <React.Suspense fallback={<>...</>}>
              <Landing />
            </React.Suspense>
          }
        />
        <Route
          path="/about-us"
          element={
            <React.Suspense fallback={<>...</>}>
              <AboutUs />
            </React.Suspense>
          }
        />
        <Route path="/shop" exact="true" element={<Items />} />
        <Route path="/auth" exact="true" element={<Auth />} />


        <Route
        path="/contact-us"
          element={
            <React.Suspense fallback={<>...</>}>
              <Contact />
            </React.Suspense>
          }
        />
        <Route path="/cart" exact="true" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
