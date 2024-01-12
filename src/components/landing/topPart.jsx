import React from "react";
import "./landing.css";
import Polygon2 from "./../../assets/landing/Polygon2.svg";
import Polygon3 from "./../../assets/landing/Polygon3.svg";
import Polygon4 from "./../../assets/landing/Polygon4.svg";
import { useNavigate } from "react-router";

export default function TopPart() {
  const navigate = useNavigate();
  return (
    <div className="topPartContainer">
      <div className="topPartTop">
        <h2>Buzzworthy Honey</h2>
        <span>
          Savor the unfiltered beauty <br /> of nature in every spoonful of raw
          honey,
          <br />a golden masterpiece crafted by bees and blossoms.
        </span>
        <button
          onClick={() => {
            navigate("/shop");
          }}
          className="bg-[#eba937] p-[10px] text-white"
        >
          Our Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="24"
            viewBox="0 0 45 24"
            fill="none"
          >
            <path
              d="M44.0607 13.0607C44.6464 12.4749 44.6464 11.5251 44.0607 10.9393L34.5147 1.3934C33.9289 0.807608 32.9792 0.807609 32.3934 1.3934C31.8076 1.97918 31.8076 2.92893 32.3934 3.51472L40.8787 12L32.3934 20.4853C31.8076 21.0711 31.8076 22.0208 32.3934 22.6066C32.9792 23.1924 33.9289 23.1924 34.5147 22.6066L44.0607 13.0607ZM1.31134e-07 13.5L43 13.5L43 10.5L-1.31134e-07 10.5L1.31134e-07 13.5Z"
              fill="black"
            />
          </svg>
        </button>
      </div>

      <div className="topPartBottom">
        <img src={Polygon2} alt="" width="400px" />

        <div>
          <img src={Polygon3} alt="" width="200px" />
          <img src={Polygon4} alt="" width="200px" />
        </div>
      </div>
    </div>
  );
}
