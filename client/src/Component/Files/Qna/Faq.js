import React, { useState } from "react";
import Accordion from "./Accordion";
import "./faq.css";
import { data } from "../../../data";
import PageSearch from "./PageSearch";

function Faq() {
  const [record, setRecord] = useState(data);
  return (
    <section className="info">
      <div className="info-main">
        <p>
          For your reference, please read our Personal Trainer FAQ page as there
          are many frequently asked questions on Scheduliser—
          <br />
          our app for PT, how it works, and other concerns, like the free trial,
          etc. have already been documented by us for your guidance.
          <br />
          We hope that our Personal Trainer FAQ will further enhance your
          experience in using our PT software. In case you haven’t found
          <br />
          the answers on our FAQ page, feel free to reach out to us.
        </p>
      </div>
      <PageSearch />
      {record.map((data) => (
        <Accordion key={data.id} {...data} />
      ))}
    </section>
  );
}

export default Faq;
