import React from "react";
import "./testimonial.css";
import { cardDetails } from "./../../helpers/card.helpers";

export default function Testimonial() {
  return (
    <div className="testimonial">
      {cardDetails &&
        cardDetails.map((card, index) => {
          return (
            <div key={index}>
              <img src={card.img} alt={card.img} className="img" />

              <div className="card">
                <span>{card.message}</span>

                <div>
                  <span>
                    {" "}
                    <strong>{card.name}</strong>
                  </span>
                  <span>{card.career}</span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
