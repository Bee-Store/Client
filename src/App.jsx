import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Landing from "./Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./components/shop/Items";
import "./App.css";
import AboutUs from "./pages/AboutUs";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact="true" element={<Landing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/shop" exact="true" element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
}
