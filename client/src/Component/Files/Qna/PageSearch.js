import React from "react";
import { Link } from "react-router-dom";
import "./PageSearch.css";

function PageSearch() {
  return (
    <>
      <div className="secondery-info">
        <h2>FAQ's</h2>
        <ul>
          <li>
            <Link to="#" className="first">
              General
            </Link>
          </li>
          <li>
            <Link to="#" className="second">
              Free trail
            </Link>
          </li>
          <li>
            <Link to="#" className="second">
              subscription
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PageSearch;
