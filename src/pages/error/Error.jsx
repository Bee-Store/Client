import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import NotFoundTitle from "./NotFoundTitle";

export default function Error() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          marginTop: "14em",
        }}
      >
        <NotFoundTitle />
        {/* <h1>Error</h1>
      <h1>404</h1> */}
      </div>
      <Footer />
    </div>
  );
}
