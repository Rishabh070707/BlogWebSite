import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FeaturesAccordion.css";

function FeaturesAccordion({ id, title, des, longdes }) {
  const [data, setData] = useState(false);
  return (
    <>
      <div className="accord">
        <ul>
          <li className="space">
            <Link to="#" className="toggle" onClick={() => setData(!data)}>
              {title}
              <span>{data ? "–" : "+"}</span>
            </Link>

            <ul className="inner">
              <li>
                {data && <p>{des}</p>} {data && <p>{longdes}</p>}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FeaturesAccordion;
