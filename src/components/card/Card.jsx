import React, { useEffect, useState } from "react";
import "./card.css";
import axios from "axios";

export default function Card() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => console.error(e));
  }, []);
  return <div></div>;
}
