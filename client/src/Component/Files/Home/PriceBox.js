import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function PriceBox() {
  return (
    <div className="box">
      <h2>30 days free trail</h2>
      <div className="plans">
        <strong>Business Monthly</strong>
        <div className="price">
          <b>$24.99</b>
          <p>/month</p>
        </div>
      </div>
      <div className="plans">
        <strong>Business Yearly</strong>
        <div className="price">
          <b>$199.99</b>
          <p>/year</p>
        </div>
      </div>

      <div className="plans-a">
        <Link>Subscribe</Link>
      </div>
    </div>
  );
}

export default PriceBox;
