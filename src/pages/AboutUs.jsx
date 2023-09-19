import React from "react";
import "./aboutUs.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import HealthBenefit from "../components/about/healthBenefit/HealthBenefit";
import img1 from "./../assets/about/img1.png";
import img2 from "./../assets/about/img2.png";
import img3 from "./../assets/about/img3.png";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <HealthBenefit />
      <div
        style={{
          backgroundColor: "#EBA937",
          padding: "2em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "25px",
        }}
      >
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi <br /> repudiandae
          consequuntur voluptatum laborum numquam blanditiis harum quisquam eius
          sed odit <br />
          fugiat iusto fuga praesentium optio, eaque rerum!Provident similique
          accusantium nemo autem. Veritatis <br /> obcaecati tenetur iure eius
          earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid
          culpaofficia <br /> aut! Impedit sit sunt quaerat, odit, tenetur
          error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
          <br /> Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
        </span>
      </div>

      {/* How we get honey */}
      <div className="howWeGet">
        <h1>How we get honey</h1>

        <div>
          <img src={img1} alt="" />
          <div>
            <span></span>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div>
          <img src={img2} alt="" />
          <div></div>
        </div>

        <div>
          <span>Packaging</span>

          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={img3} alt="" />
            <span>
              We package honey meticulously, <br /> ensuring it is filtered,
              sealed, and <br /> labeled with precision to maintain its <br />{" "}
              exceptional quality and appeal to our <br /> customers. Our
              commitment to <br /> excellence is evident in every jar we <br />{" "}
              produce.
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
