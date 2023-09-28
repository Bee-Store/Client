import React from "react";
import { useNavigate } from "react-router-dom";
import "./../landing.css";
import raw_honey from "./../../../assets/landing/raw_honey.png";
import bee from "./../../../assets/landing/bee.svg";
import { short_info } from "../../../helpers/shortAbout.helper";

export default function ShortAbout() {
  const navigate = useNavigate();
  return (
    <div className="shortAboutWrapper">
      <img src={raw_honey} alt="raw_honey" className="firstImg" />
      <div>
        <div className="shortAboutimg">
          <img src={bee} alt="bee" className="secondImg" />

          <div>
            <h3
              style={{
                color: "#EBA937",
                fontFamily: "Inter",
                fontSize: "50px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              About Us
            </h3>
            <span
              style={{
                color: "#000",
                fontFamily: "Inter",
                fontSize: "17px",
                fontStyle: "normal",
                fontWeight: "400",
                lineWeight: "normal",
              }}
            >
              Your go to shop
            </span>
          </div>
        </div>

        <div>
          <span
            style={{
              fontSize: "20px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Maxime mollitia, molestiae quas vel sint commodi <br />
            repudiandae consequuntur voluptatum laborum <br /> numquam
            blanditiis harum quisquam eius sed odit <br /> fugiat iusto fuga
            praesentium optio, eaque rerum! <br /> Provident similique
            accusantium nemo autem. Veritatis <br />
            obcaecati tenetur iure eius earum ut molestias <br /> architecto
            voluptate aliquam nihil, eveniet aliquid culpa <br /> officia aut!
            Impedit sit sunt quaerat, odit, <br /> tenetur error, harum nesciunt
            ipsum debitis quas aliquid. <br /> Reprehenderit, quia. Quo neque
            error repudiandae fuga? <br /> Ipsa laudantium molestias eos
          </span>

          <div>
            <button
              onClick={() => navigate("/about-us")}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                gap: "10px",
                width: "45%",
                marginTop: "2rem",
              }}
            >
              Learn More{" "}
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

            <div
              style={{
                display: "grid",
                gap: "1",
                gridTemplateColumns: "repeat(2, 1fr)",
              }}
            >
              {short_info &&
                short_info.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        marginTop: "23px",
                      }}
                    >
                      <span>{item.percent}</span>
                      <hr
                        style={{
                          width: "40px",
                          color: "#EBA937",
                          borderColor: "#EBA937",
                          backgroundColor: "#EBA937",
                        }}
                      />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
