import { useState } from "react";

import Landing from "./Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./components/shop/Items";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";

import "./App.css";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/navbar/navbar";
export default function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" exact="true" element={<Landing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/shop" exact="true" element={<Items />} />
        <Route path="/cart" exact="true" element={<Cart />} />
        <Route path="/details" exact="true" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
