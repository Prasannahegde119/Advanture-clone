import React from "react";
import "./Desti.css";
import image1 from "../../assets/destiny1.jpg";
import image2 from "../../assets/destiny2.jpg";
import image3 from "../../assets/destiny3.jpg";
import image4 from "../../assets/destiny4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Destinations() {
  return (
    <>
      <div className="package-container">
        <div className="package-title">Top Destinations</div>
        <div className="package-cards">
          <div className="package-card">
            <img src={image1} alt="Package 1" />
            <div className="overlay">
              <div className="card-tittle">Karnataka</div>
              <div className="card-package-id">
                2 Pckages {"             "}1 Activity
              </div>
            </div>
          </div>
          <div className="package-card">
            <img src={image2} alt="Package 1" />
            <div className="overlay">
              <div className="card-tittle"> Leh Ladhak</div>
              <div className="card-package-id">
                2 Pckages {"               "}1 Activity
              </div>
            </div>
          </div>
          <div className="package-card">
            <img src={image3} alt="Package 1" />
            <div className="overlay">
              <div className="card-tittle">Dubai</div>
              <div className="card-package-id">
                2 Pckages {"             "}1 Activity
              </div>
            </div>
          </div>
          <div className="package-card">
            <img src={image4} alt="Package 1" />
            <div className="overlay">
              <div className="card-tittle">Mauritus</div>
              <div className="card-package-id">
                2 Pckages {"             "}1 Activity
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="explore-more">
        <div className="yelloww">
          <div>Explore More Destinations</div>
          <div>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Destinations;
