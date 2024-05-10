import React from "react";
import "./Hollidays.css";
import image from "../../assets/holliday.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Hollidays() {
  return (
    <>
      <div className="hollyday-container">
        <div className="holliday-tittle">Family And Group Holidays</div>
        <div className="top">
          <div className="icons">
            <div>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="inner-content">
          <div className="left">
            <img src={image} alt="image" className="image"></img>
          </div>
          <div className="right">
            <div className="text-content1">
              <div className="upper">
                <div className="heading">Manali 5N6D Group Tour</div>
                <div className="subheading">6 Days / 5 Nights</div>
                <div className="para">
                  A group tour to Manali promises a delightful escape into the
                  serene and picturesque landscapes of the Himalayan region.
                </div>
              </div>
              <div className="bottom">
                <div className="details">
                  <div className="text1">View More Details</div>
                  <div>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hollidays;
