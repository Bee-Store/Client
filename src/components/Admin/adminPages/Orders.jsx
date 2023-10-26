import React, { useState, useEffect } from "react";

export default function Orders() {
  useEffect(() => {
    fetch("http://localhost:5000/api/orders/all")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div className="mt-4 ml-4"></div>;
}
