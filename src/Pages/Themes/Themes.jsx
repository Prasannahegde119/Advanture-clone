import React from "react";
import "./Themes.css";
import image1 from "../../assets/theme1.jpeg";
import image2 from "../../assets/theme2.jpeg";
import image3 from "../../assets/theme3.jpg";
import image4 from "../../assets/theme2.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Themes() {
  return (
    <>
      <div className="package-container">
        <div className="package-title">Themes</div>
        <div className="package-cards">
          <div className="package-card">
            <img src={image1} alt="Package 1" />
            <div className="overlay1">
              <div className="card-tittle1">Advanture Hollidays</div>
            </div>
          </div>
          <div className="package-card">
            <img src={image2} alt="Package 1" />
            <div className="overlay1">
              <div className="card-tittle1">Family Hollidays</div>
            </div>
          </div>
          <div className="package-card">
            <img src={image3} alt="Package 1" />
            <div className="overlay1">
              <div className="card-tittle1">Seasonal Hollidays</div>
            </div>
          </div>
          <div className="package-card">
            <img src={image4} alt="Package 1" />
            <div className="overlay1">
              <div className="card-tittle1">Romantic Getways</div>
            </div>
          </div>
        </div>
      </div>
      <div className="explore-more">
        <div className="yelloww">
          <div>Explore More Themes</div>
          <div>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Themes;
