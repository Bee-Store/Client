import React from 'react'
import Polygon2 from "./../../assets/Polygon2.svg";
import Polygon3 from "./../../assets/Polygon3.svg";
import Polygon4 from "./../../assets/Polygon4.svg";

export default function TopPart() {
  return (
    <div>
      <div></div>
      <div>
        <img src={Polygon2} alt="" width="300px" />

        <div>
          <img src={Polygon3} alt="" width="150px" />
          <img src={Polygon4} alt="" width="150px" />
        </div>
      </div>
    </div>
  );
}
