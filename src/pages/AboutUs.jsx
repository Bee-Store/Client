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
        <div>
          <h1 className="header">How we get honey</h1>

          <div className="same">
            <img src={img1} alt="img1" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <span>
                At our honey farm, we take pride in sourcing <br /> the finest
                honey from dedicated beekeepers <br /> in the heart of Kenya. We
                are committed to <br />
                supporting local farmers and bringing you the <br /> purest,
                most delicious honey straight from <br /> the heart of Kenya.
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <span>Our honey is harvested in these areas:-</span>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, auto)",
                  gap: "10px"
                  }}>
                  <span>Meru</span>
                  <span>Tharaka Nithi</span>
                  <span>Baringo</span>
                  <span>Machakos</span>
                  <span>Kitui</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="second">
          <h1 className="header">Processing</h1>

          <div className="same">
            <div>
              <h2>Here are the steps we take to process honey</h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span>
                  1. Harvesting: Begin by collecting honeycombs from <br /> your
                  beehives when they are filled with mature <br /> honey.
                </span>

                <span>
                  2. Uncapping: Use a hot knife or an uncapping <br /> machine
                  to remove the wax cappings from the <br /> honeycomb cells,
                  exposing the honey.
                </span>

                <span>
                  3. Extraction: Place the uncapped frames in a honey <br />{" "}
                  extractor, a device that spins them to extract <br /> honey
                  through centrifugal force.
                </span>

                <span>
                  4. Filtering: Filter the extracted honey to remove any <br />
                  remaining wax, bee parts, or impurities.
                </span>

                <span>
                  5. Settling: Allow the filtered honey to rest in a <br />{" "}
                  settling tank for a day to let air bubbles rise to <br /> the
                  surface and be removed.
                </span>

                <span>
                  6. Warming: Gently warm the honey to improve its <br />{" "}
                  viscosity and make it easier to handle and <br /> package. Be
                  careful not to overheat, as this can <br /> harm the honey's
                  quality.
                </span>
              </div>
            </div>
            <img src={img2} alt="img2" />
          </div>
        </div>

        <div>
          <h1 className="header">Packaging</h1>

          <div className="same">
            <img src={img3} alt="img3" />
            <span>
              We package honey meticulously, <br /> ensuring it is filtered,
              sealed, and <br /> labeled with precision to maintain its <br />
              exceptional quality and appeal to our <br /> customers. Our
              commitment to <br /> excellence is evident in every jar we <br />
              produce.
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
