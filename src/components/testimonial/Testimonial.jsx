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
              <img src={card.img} alt="" className="img" />

              <div className="card">
                <span>{card.message}</span>

                <div >
                  <span>{card.name}</span>
                  <span>{card.career}</span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
