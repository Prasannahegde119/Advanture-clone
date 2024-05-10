import React, { useEffect } from "react";
import "./Styles.css";
import logo from "../assets/Logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/container1.jpg";
import image2 from "../assets/container2.jpg";
import image3 from "../assets/container3.jpg";
import TextContainer from "./TextContainer.jsx/TextContainer";
import Packages from "./SpecialPackages/Packages";
import Destinations from "./TopDestinations/Destinations";
import Hollidays from "./Hollydays/Hollidays";
import Footer from "./Footer/Footer";
import Themes from "./Themes/Themes";
import Testimonial from "./Testimonial/Testimonial";
import SocialMedia from "./Socialmedia/SocialMedia";
import FooterContent from "./FooterConetnt/FooterContent";

function Advanture() {
  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.slickNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  let sliderRef;

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <>
      <div className="root">
        <div className="navbar">
          <div className="navbar-container">
            <div className="navbar-left">
              <a>
                <div>
                  <img src={logo} alt="Advanture" className="logo"></img>
                </div>
              </a>
            </div>
            <div className="navbar-right">
              <ul className="lists">
                <li className="dropdown">
                  Destinations <span className="arrow"></span>
                  <div className="dropdown-content">
                    <a href="#">Destination 1</a>
                    <a href="#">Destination 2</a>
                    <a href="#">Destination 3</a>
                  </div>
                </li>
                <li className="dropdown">
                  Themes <span className="arrow"></span>
                  <div className="dropdown-content">
                    <a href="#">Theme 1</a>
                    <a href="#">Theme 2</a>
                    <a href="#">Theme 3</a>
                  </div>
                </li>
                <li className="highlight">Group Tours</li>
                <li>Flights</li>
                <li>Pay Now</li>
                <li>About Us</li>
                <li className="contactus">Contact Us</li>
                <li>Why Us</li>
                <li>Login</li>
              </ul>
            </div>
          </div>
        </div>
        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          <div className="slick-slide" data-index="13">
            <img src={image1} alt="Slide 1" />
          </div>
          <div className="slick-slide">
            <img src={image2} alt="Slide 2" />
          </div>
          <div className="slick-slide">
            <img src={image3} alt="Slide 3" />
          </div>
        </Slider>
        <div className="text-center">
          <TextContainer />
        </div>
        <Packages />
        <Destinations />
        <Hollidays />
        <Themes />
        <Testimonial />
        <SocialMedia />
        <FooterContent />
        <Footer />
      </div>
    </>
  );
}

export default Advanture;
