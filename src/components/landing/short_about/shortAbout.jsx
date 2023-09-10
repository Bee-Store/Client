import React from "react";
import "./../landing.css";
import raw_honey from "./../../../assets/landing/raw_honey.png";
import bee from "./../../../assets/landing/bee.svg";

export default function ShortAbout() {
  return (
    <div className="shortAboutWrapper">
      <img src={raw_honey} alt="raw_honey" width="400px" />
      <div>
        <div>
          <div className="shortAboutimg">
            <img src={bee} alt="bee" width="50px" />

            <div>
              <h3>About Us</h3>
              <span>Your go to shop</span>
            </div>
          </div>

          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos
          </span>
        </div>
      </div>
    </div>
  );
}
