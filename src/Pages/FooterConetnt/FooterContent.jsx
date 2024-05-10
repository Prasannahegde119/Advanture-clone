import React from "react";
import "./FooterContent.css";
import image1 from "../../assets/phone.png";
import image2 from "../../assets/email.png";
import image3 from "../../assets/google.png";
import image4 from "../../assets/fb.png";
import image5 from "../../assets/ig.png";
import visa from "../../assets/visa.png";
import mcard from "../../assets/mcard.png";
import upi from "../../assets/upi.png";
import paytm from "../../assets/paytm.png";
import gpay from "../../assets/gpay.png";

function FooterContent() {
  return (
    <>
      <div className="footercontent">
        <div className="topcontainer">
          <div className="leftfooter">
            <div className="companyname">Aventuras Holidays LLP</div>
            <div className="contact">
              <div className="column1">
                <div className="item1">
                  <div className="footerimage">
                    <img className="ftimage" alt="ftimage" src={image1}></img>
                    <div className="ftext"> 8197484494</div>
                  </div>
                </div>
                <div className="item1">
                  <div className="footerimage">
                    <img className="ftimage" alt="ftimage" src={image2}></img>
                    <div className="ftext">hello@aventuras.co.in</div>
                  </div>
                </div>
                <div className="item1">
                  <div className="footerimage">
                    <img className="ftimage" alt="ftimage" src={image3}></img>
                    <div className="ftext"> Google Reviews</div>
                  </div>
                </div>
              </div>
              <div className="column2">
                <div className="item1">
                  <div className="footerimage">
                    <img className="ftimage" alt="ftimage" src={image4}></img>
                    <div className="ftext"> Google Reviews</div>
                  </div>
                </div>
                <div className="item1">
                  <div className="footerimage">
                    <img className="ftimage" alt="ftimage" src={image5}></img>
                    <div className="ftext"> Google Reviews</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="payment">
              <div className="paytittle">We Accept</div>
              <div className="brand-images">
                <div className="brands">
                  <img className="brands1" alt="brands" src={visa}></img>
                </div>
                <div className="brands">
                  <img className="brands1" alt="brands" src={gpay}></img>
                </div>
                <div className="brands">
                  <img className="brands1" alt="brands" src={paytm}></img>
                </div>
                <div className="brands">
                  <img className="brands1" alt="brands" src={mcard}></img>
                </div>
                <div className="brands">
                  <img className="brands1" alt="brands" src={upi}></img>
                </div>
              </div>
            </div>
          </div>

          <div className="righttfooter">
            <div className="footerlinks">
              <div className="left-column">
                <div className="leftbranch">
                  <div className="footer-heading">DOMESTIC</div>
                  <ul className="footerlist">
                    <li className="ftitem">Gujarat</li>
                    <li className="ftitem">Rajastan</li>
                    <li className="ftitem">Udupi</li>
                    <li className="ftitem">Kundapur</li>
                    <li className="ftitem">Sagar</li>
                    <li className="ftitem">Shimla</li>
                    <li className="ftitem">Shivmogga</li>
                    <li className="ftitem">Honnavara</li>
                    <li className="ftitem">Belgavi</li>
                    <li className="ftitem">Haveri</li>
                    <li className="ftitem">Chikmagalur</li>
                  </ul>
                </div>
                <div className="leftbranch">
                  <div className="footer-heading">INTERNATIONAL</div>
                  <ul className="footerlist1">
                    <li className="ftitem">Kota</li>
                    <li className="ftitem">Uppuru</li>
                    <li className="ftitem">Kapu</li>
                    <li className="ftitem">Mangalore</li>
                    <li className="ftitem">Dharvad</li>
                    <li className="ftitem">Kodagu</li>
                    <li className="ftitem">Mundagod</li>
                  </ul>
                </div>
              </div>
              <div className="right-column">
                <div className="leftbranch">
                  <div className="footer-heading">IMPORTANT LINKS</div>
                  <ul className="footerlist1">
                    <li className="ftitem">Home</li>
                    <li className="ftitem">ContactUs</li>
                    <li className="ftitem">Profile</li>
                    <li className="ftitem">About Us</li>
                    <li className="ftitem">Privacy</li>
                    <li className="ftitem">cancellation</li>
                    <li className="ftitem">Policy</li>
                    <li className="ftitem">Book Now</li>
                  </ul>
                </div>
                <div className="leftbranch">
                  <div className="footer-heading">THEME</div>
                  <ul className="footerlist1">
                    <li className="ftitem">Hollidays</li>
                    <li className="ftitem">Advanturas</li>
                    <li className="ftitem">Treking</li>
                    <li className="ftitem">Hunting</li>
                    <li className="ftitem">Scuba</li>
                    <li className="ftitem">Diving</li>
                    <li className="ftitem">SKyDiving</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterContent;
