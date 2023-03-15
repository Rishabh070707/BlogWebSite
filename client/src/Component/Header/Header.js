import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src="img/oxy-logo.png" className="logo-img-1" alt="" />
          </Link>
          <Link to="/">
            <img src="img/oxy-logo-2.png" className="logo-img-2" alt="" />
          </Link>
        </div>
        <div className="nav">
          <div className="list">
            <Link to="/features">Features</Link>
          </div>
          <div className="list">
            <Link className="arrow">
              Why Scheduliser <ArrowDropDownIcon />
            </Link>
          </div>
          <div className="list">
            <Link to="/blog">Blog</Link>
          </div>
          <div className="list">
            <Link to="/product">Product</Link>
          </div>
          <div className="list">
            <Link to="/faq">Faq's</Link>
          </div>
        </div>
        <div className="button">
          <Link>Start free trail</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
