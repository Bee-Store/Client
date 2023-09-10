import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import TopPart from "./components/landing/topPart";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <TopPart />

      <div
        style={{
          background: "#EBA937",
          padding: "5em 0",
          margin: "5em 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Inter",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
          }}
        >
          Honey that you won’t find anywhere else
        </span>
      </div>
    </div>
  );
}

export default App;
