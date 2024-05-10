import React from "react";
import "./textcontainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faParachuteBox,
  faPlane,
  faUser,
  faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";

function TextContainer() {
  return (
    <div>
      <div className="text-content">
        <div className="heading">
          <div className="greeting">
            WELCOME TO <span className="yellow">AVENTURas</span>
          </div>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search by country or City" />
          <button type="submit" className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="bottom">
          <div className="bottom-container">
            <div className="bottom-item">
              <div className="icon">
                <FontAwesomeIcon icon={faParachuteBox} />
              </div>
              <div className="text">
                <div>Hustlefree</div>
                <div>Free</div>
              </div>
            </div>
            <div className="bottom-item">
              <div className="icon">
                <FontAwesomeIcon icon={faPlane} />
              </div>
              <div className="text">
                <div>Customers</div>
                <div>Happy</div>
              </div>
            </div>
            <div className="bottom-item">
              <div className="icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="text">
                <div>Travel</div>
                <div>Anywhere</div>
              </div>
            </div>
            <div className="bottom-item">
              <div className="icon">
                <FontAwesomeIcon icon={faTicketAlt} />
              </div>
              <div className="text">
                <div>Easy </div>
                <div>Booking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextContainer;
