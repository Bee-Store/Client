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
        className="about-info"
        style={{
          backgroundColor: "#EBA937",
          padding: "2em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "25px",
        }}
      >
        <span className="text-white">
          Welcome to Bee Kissed Honey, where we take pride in delivering
          sweet-tasting and healthy honey straight from the hive to your table.
          Our passion for bees and their incredible craftsmanship is reflected
          in every jar we produce.
          <br /> At Bee Kissed Honey, we believe in the natural goodness of
          honey, untouched by artificial additives or preservatives.
          <br /> Our bees roam freely in pristine environments, collecting
          nectar from blossoms to create a pure and delicious honey that not
          only tantalizes your taste buds but also provides numerous health
          benefits.
          <br /> Discover the richness of our honey, carefully crafted with love
          and dedication. <br />
          We are committed to sustainability, ensuring that our beekeeping
          practices promote the well-being of the bees and the environment.{" "}
          <br />
          Bee Kissed Honey is more than just a sweetener; it's a commitment to
          quality, health, and the vital role bees play in our ecosystem. <br />
          Indulge in the golden goodness of Bee Kissed Honey and experience the
          unparalleled taste of nature's finest creation.
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

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, auto)",
                    gap: "10px",
                  }}
                >
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
