import React from "react";
import Style from "./Footer.module.scss";
import Logo from "../../Assets/Images/Logo.jpg";
function Footer() {
  return (
    <>
      <footer className={Style.Common_footer}>
        <div className={Style.Row1}>
          <div>
            <h4 className={Style.heading}>COMPANY</h4>
            <ul className={Style.lists}>
              <li>About us</li>
              <li>Team</li>
              <li>Careers</li>
              <li>F4F Blog</li>
              <li>Bug Bount</li>
              <li>F4F Pop</li>
              <li>F4F Supper</li>
            </ul>
          </div>
          <div>
            <h4 className={Style.heading}>CONTACT</h4>
            <ul className={Style.lists}>
              <li>Help & Supports</li>
              <li>Partner with us</li>
              <li>Ride With us</li>
            </ul>
          </div>
          <div>
            <h4 className={Style.heading}>LEGAL</h4>
            <ul className={Style.lists}>
              <li>Terms & Conditions</li>
              <li>Refund & Cancellation</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Offer Term</li>
            </ul>
          </div>
          <div>
            <h4 className={Style.heading}>Download Appliction</h4>
            <div className={Style.Applicaton}>
              <i style={{ fontSize: "45px" }} className="fab fa-apple"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div className={Style.advertise}>
                <span className={Style.p}>Download on the</span>
                <h4 className={Style.h4}>App Store</h4>
              </div>
            </div>
            <div className={Style.Applicaton}>
              <i
                style={{ fontSize: "40px" }}
                className="fab fa-google-play"
              ></i>
              <div className={Style.advertise}>
                <span className={Style.p}>Get it On</span>
                <h4 className={Style.h4}>Google play</h4>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.isolate} />
        <h4 style={{ marginLeft: "85px" }} className={Style.heading}>
          We Deliver TO
        </h4>
        <div className={Style.Row1}>
          <ul className={Style.lists}>
            <li>Akola</li>
            <li>Amravati</li>
            <li>Aurangabad</li>
            <li>Baramati</li>
            <li>Beed</li>
            <li>Barshi</li>
            <li>Bikaner</li>
          </ul>
          <ul className={Style.lists}>
            <li>Bandra</li>
            <li>Dhule</li>
            <li>Gurgaon</li>
            <li>Ichalkaranji</li>
            <li>Indore</li>
            <li>Islampur</li>
            <li>Jabalpur</li>
          </ul>
          <ul className={Style.lists}>
            <li>Jalgaon</li>
            <li>Jaysingpur</li>
            <li>Kolhapur</li>
            <li>Karad</li>
            <li>Karnataka</li>
            <li>Karnataka</li>
            <li>Latur</li>
          </ul>
          <ul className={Style.lists}>
            <li>Lonavala</li>
            <li>Mumbai</li>
            <li>Nagpur</li>
            <li>Nashik</li>
            <li>Pune</li>
            <li>Raigad</li>
            <li>Sangli</li>
          </ul>
        </div>
        <div className={Style.isolate} />
        <div className={Style.Row2}>
          <div className={Style.footerCompany}>
            <img src={Logo} className={Style.logo} alt="LOGO" />

            <h5>_FOOD 4 FOODIE_</h5>
          </div>
          <div className={Style.footercopyRights}>
            <i>&copy;2020_FOOD 4 FOODIE_</i>
          </div>
          <div className={Style.socialmediaicons}>
            <div className={Style.icon1}>
              <i className="fab fa-facebook-square"></i>
            </div>
            <div className={Style.icon2}>
              <i className="fab fa-twitter-square"></i>
            </div>
            <div className={Style.icon3}>
              {" "}
              <i className="fab fa-youtube-square"></i>
            </div>
            <div className={Style.icon4}>
              {" "}
              <i className="fab fa-instagram-square"></i>
            </div>
          </div>
        </div>
      </footer>
      ;
    </>
  );
}

export default Footer;
