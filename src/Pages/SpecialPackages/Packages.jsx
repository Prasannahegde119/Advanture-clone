import React from "react";
import "./Packages.css";
import image1 from "../../assets/card1.webp";
import image2 from "../../assets/container2.jpg";
import image3 from "../../assets/container3.jpg";
import image4 from "../../assets/comp21.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Packages() {
  return (
    <>
      <div className="package-container">
        <div className="package-title">Special Packages</div>
        <div className="package-cards">
          <div className="package-card">
            <img src={image1} alt="Package 1" />
            <div className="overlay">
              <div className="card-tittle">Phuket Krabi 6 days tour</div>
              <div className="card-package">6 Days / 5 Nights</div>
              <div className="card-package-id">Package Id: AVNT123</div>
            </div>
          </div>
          <div className="package-card">
            <img src={image2} alt="Package 1" />
            <div className="overlay">
              <div className="card-tittle"> Darjeeling tour</div>
              <div className="card-package">3 Days / 2 Nights</div>
              <div className="card-package-id">Package Id: AVNT122</div>
            </div>
          </div>
          <div className="package-card">
            <img src={image3} alt="Package 1" />
            <div className="overlay">
              <div className="card-tittle">Kashmir Tour Package</div>
              <div className="card-package">7 Days / 5 Nights</div>
              <div className="card-package-id">Package Id: AVNT125</div>
            </div>
          </div>
          <div className="package-card">
            <img src={image4} alt="Package 1" />
            <div className="overlay">
              <div className="card-tittle">Chardham Yatra Ex Delhi</div>
              <div className="card-package">4 Days / 3 Nights</div>
              <div className="card-package-id">Package Id: AVNT124</div>
            </div>
          </div>
        </div>
      </div>
      <div className="explore-more">
        <div className="yelloww">
          <div>Explore More Packages</div>
          <div>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Packages;
