import React, { useState, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./components/shop/Items";
import "./App.css";

const Contact = lazy(() => import("./pages/contact/Contact"));
const Landing = lazy(() => import("./Landing"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

export default function App() {
  const [count, setCount] = useState(0);

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

        <Route
        path="/contact"
          element={
            <React.Suspense fallback={<>...</>}>
              <Contact />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
