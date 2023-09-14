import React from "react";
import up_arrow from "./../../../assets/landing/up_arrow.png";
import right_arrow from "./../../../assets/landing/right_arrow.png";
import left_arrow from "./../../../assets/landing/left_arrow.png";
import bottom_arrow from "./../../../assets/landing/bottom_arrow.png";
import health from "./../../../assets/landing/health.png";
import "./health.css";

export default function Health() {
  return (
    <div className="health">
      <div>
        <span
          style={{
            color: "#EBA937",
            fontFamily: "Inter",
            fontSize: "50px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
          }}
        >
          Health Benefits
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <span>Nourishes your skin and face</span>
        <img src={up_arrow} alt="up_arrow" className="arrow" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3em",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <span>Source of energy</span>
          <img src={left_arrow} alt="up_arrow" className="arrow" />
        </div>

        <img src={health} alt="honey" className="main_img" />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <img src={right_arrow} alt="up_arrow" className="arrow" />
          <span>Strengthens Immune system</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <img src={bottom_arrow} alt="bottom_arrow" className="arrow" />
        <span>Home Remedy for Cough</span>
      </div>
    </div>
  );
}
