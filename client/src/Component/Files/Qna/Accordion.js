import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Accordion.css";

function Accordion({ des, longdes, id, mail }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div id="accordion-A">
        <div className="accord-A">
          <ul>
            <li className="space-A">
              <Link to="" className="toggle-A" onClick={() => setShow(!show)}>
                {des}
                <span>{show ? "-" : "+"}</span>
              </Link>
              <ul className="inner-A">
                <li>
                  {show && (
                    <p>
                      {longdes}
                      {""} <Link>{mail}</Link>
                    </p>
                  )}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Accordion;
