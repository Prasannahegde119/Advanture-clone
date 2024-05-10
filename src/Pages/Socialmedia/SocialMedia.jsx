import React from "react";
import "./SocialMedia.css";
import image from "../../assets/outer.png";
import logo from "../../assets/logo1.png";
import image1 from "../../assets/facebook.png";
import image2 from "../../assets/instagram.png";

function SocialMedia() {
  return (
    <>
      <div className="socialcontainer">
        <div className="outer1">
          <img className="imageouter" src={image} alt="outer" />
        </div>
        <div className="inner1">
          <div className="innercontent1">
            <div className="leftinner">
              <img src={logo} alt="logo" className="imglogo"></img>
            </div>
            <div className="rightinner">
              <div className="innerheading">AVENTURAS</div>
              <div className="innerpara">
                Join our Community on Facebook and Instagram to avail Exclusive
                Benefits.
              </div>
              <div className="socialicons">
                <img alt="instagram" src={image1}></img>
                <img alt="facebook" className="insta" src={image2}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialMedia;
