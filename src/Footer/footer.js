import React from "react";
import Facebook from "./Facebook.svg";
import Twitter from "./Twitter.svg";
import Google from "./Google.svg";
import "./footerStyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              Bankwise Inc.
              <br />
              123 Main Street
              <br />
              Anytown, USA 12345
            </p>
            <p>
              Phone: (123) 456-7890
              <br />
              Email: info@bankwise.com
            </p>
          </div>
          <div className="col-md-4">
            <h5>About Bankwise</h5>
            <p>
              Bankwise is a leading online banking platform that provides a wide
              range of financial services to customers around the world. With a
              commitment to innovation and customer satisfaction, we strive to
              make banking easier and more accessible for everyone.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Connect With Us</h5>
            <p className="social-links">
              <a href="https://www.facebook.com/">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="https://www.google.com/search?q=twitter&oq=twi&aqs=chrome.0.0i131i355i433i512j46i131i199i433i465i512j69i57j0i131i433i512l2j46i199i433i465i512j69i60l2.19843j0j7&sourceid=chrome&ie=UTF-8">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="https://www.google.com/">
                <img src={Google} alt="Google" />
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="copyright">
              Copyright &copy; {new Date().getFullYear()} Bankwise Inc. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
