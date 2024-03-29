import { lazy } from "react";
import Navbar from "./components/navbar/navbar";
import TopPart from "./components/landing/topPart";
import "./App.css";
import kidhoney from "./assets/landing/kidhoney.jpg";
import littlegirl from "./assets/landing/littlegirl.jpg";
import crystallised from "./assets/landing/crystallised.jpg";

import raw from "./assets/landing/raw.jpg";
// Components
const ShortAbout = lazy(() =>
  import("./components/landing/short_about/shortAbout")
);
const WhatWeDo = lazy(() => import("./components/landing/WhatWeDo"));
const Footer = lazy(() => import("./components/footer/footer"));
import Faq from "./components/landing/faq/Faq";
import Testimonial from "./components/testimonial/Testimonial";
import { product } from "./helpers/card.helpers";

function App() {
  return (
    <div>
      <Navbar />
      <TopPart />

      <div className="other">
        <span>Honey that you won’t find anywhere else</span>
      </div>

      <ShortAbout />
      <WhatWeDo />

      {/* Section for our products */}
      <div className="products">
        <span
          style={{
            color: "#EBA937",
            fontSize: "50px",
          }}
        >
          Our Products
        </span>

        <div
          className="product"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "3rem",
            margin: "2rem 0",
          }}
        >
          {product &&
            product.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <img
                    style={{
                      width: "180px",
                    }}
                    src={item.img}
                    alt={item.img}
                  />

                  <div>
                    <span>{item.name}</span>
                    <span>{item.info}</span>
                  </div>
                  <button className="bg-[#eba937] p-[10px] text-white">
                    {item.name}
                  </button>
                </div>
              );
            })}
        </div>
      </div>

      {/* wrap-up */}
      <div className="wrap-up">
        <div>
          <img src={raw} alt="raw" />
          <span>Real. Raw. Honey Jars</span>
          <button className="bg-[#eba937] p-[10px] text-white">
            View Products
          </button>
        </div>

        <div>
          <img src={kidhoney} alt="kidhoney" />
          <span>Real. Raw. Honey Sticks</span>
          <button className="bg-[#eba937] p-[10px] text-white">
            View Products
          </button>
        </div>
      </div>

      <div className="last-part">
        <div className="shared-part">
          <div>
            <h3>Pure, Real Raw Honey</h3>
            <span>
              Enjoy pure, raw, unadulterated, unfiltered honey at its <br />
              finest. Our honey is unpasteurized and totally raw. It has <br />
              no sugars added. It is never mixed with cheap offshore <br />
              honey. It still has naturally-occurring pollen from the bees.
              <br /> The live enzymes and yeasts are present. This is 100%
              <br /> raw honey!
            </span>
          </div>

          <img src={crystallised} alt="" />
        </div>

        <div className="shared-part second-part">
          <img src={littlegirl} alt="" />
          <div>
            <h3>Sustainable Raw Honey</h3>
            <span>
              Our vision is to sustain family-owned bee farms & <br />
              businesses. We want to connect them with great people <br /> like
              you who just want raw honey the way it was <br /> intended! Every
              jar of our pure, raw honey helps support <br /> hard-working
              American beekeepers & families like our <br />
              own.
            </span>
          </div>
        </div>

        <div className="shared-part">
          <div>
            <h3>Raw Honey With Benefits</h3>
            <span>
              This is raw honey with recognized natural health benefits <br />
              and an amazing flavor. Our clover honey varietal is <br /> smooth
              and robust. It is perfect for breakfast, tea or on <br /> the go
              with honey sticks. Stir it into your tea. Drizzle it on <br />
              your toast. Add it to recipes in place of sugar. Enjoy raw <br />
              honey the way God meant it to be! You can also enjoy big <br />
              savings with bulk raw honey deals and our discount honey <br />
              bundles.
            </span>
          </div>

          <img src={raw} alt="" />
        </div>
      </div>

      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
