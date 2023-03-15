import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <>
      <footer>
        <div className="contact">
          <h2>Contact Us</h2>
          <div className="social">
            <Link to="#">
              <EmailIcon className="icon" />
              Email
            </Link>
            <Link to="#">
              <InstagramIcon className="icon" />
              Instagram
            </Link>
            <Link to="#">
              <FacebookIcon className="icon" />
              Facebook
            </Link>
          </div>
        </div>

        <div className="one-plus">
          <section id="phone">
            <div className="call-1">
              <img src="img/phone-5.png" alt="" className="img-a" />
            </div>
            <div className="call-2">
              <h6>
                Start your Free <br />
                trail now
              </h6>
              <Link to="login-page.html">Try Scheduliser</Link>
            </div>
          </section>
        </div>
        <section id="end">
          <p>
            Copyright © 2021 OXY33 PTY LTD | All rights reserved |{" "}
            <Link to="#">Terms of service</Link> |{" "}
            <Link to="#">User Sitemap</Link>
          </p>
        </section>
      </footer>
    </>
  );
}

export default Footer;
