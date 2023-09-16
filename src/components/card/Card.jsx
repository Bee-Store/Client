import React, { useEffect, useState } from "react";
import "./card.css";
import axios from "axios";

export default function Card() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.error(e));
  }, []);

  let slides = [];
  data.map((img) => {
    slides.push(img);
  });


  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    const index = isFirst ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(index);
  };

  const goToNext = () => {
    const isFirst = currentIndex === slides.length - 1;
    const index = isFirst ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };
  return (
    <>
      <div>
        <img
          className="fetchedData-image"
          src={slides[currentIndex]}
          style={{
            width: "100%",
            height: "150px",
          }}
        />

        <div /*style={leftArrowStyles}*/ onClick={goToPrevious}>
          <span
            style={{
              float: "left",
              color: "red",
              fontSize: "3rem",
              cursor: "pointer",
            }}
          >
            &#8672;
          </span>
        </div>

        <div onClick={goToNext}>
          <span
            style={{
              float: "right",
              color: "red",
              fontSize: "3rem",
              cursor: "pointer",
            }}
          >
            &#8674;
          </span>
        </div>
      </div>
      <div onClick={() => clickedCar(data)}>
        {/* <h5>Model: {data.model}</h5>
        <h5>Fuel Type: {data.fuel_type}</h5>
        <h5>Transmition: {data.transmission}</h5>
        <h5>Price: {data.price}</h5> */}
      </div>
    </>
  );
}
