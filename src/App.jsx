import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import TopPart from "./components/landing/topPart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./components/shop/Items";
import "./App.css";



function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" exact="true" element={<TopPart />} />
        <Route path="/shop" exact="true" element={<Items />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
