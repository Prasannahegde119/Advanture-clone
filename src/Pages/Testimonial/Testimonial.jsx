import React from "react";
import "./Testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import image1 from "../../assets/customer.jpg";

function Testimonial() {
  return (
    <>
      <div className="testimonial">
        <div className="test-container">
          <div className="upper-test">
            <div className="upper-tittle">What customer say about us</div>
            <div className="upper-icons">
              <div className="icons1">
                <div className="whitepadding">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className="whitepadding">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </div>
          </div>
          <div className="middle-test">
            Click here to view our Google reviews{" "}
            <span className="star">★★★★</span>
          </div>
          <div className="bottom-test">
            <div className="image-part">
              <img src={image1} alt="iamge5" className="test-image"></img>
            </div>
            <div className="text-part">
              <div className="quotes">
                {" "}
                &quot;Absolutely Outstanding! My partner and I recently embarked
                on a heartfelt journey to Kashmir, thanks to this amazing travel
                startup. It was more than just a vacation; it was a genuine
                experience filled with warmth and care.&quot;
              </div>
              <div className="author">- {"  "}Bikash Kumar</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
