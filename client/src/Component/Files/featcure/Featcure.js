import React, { useState } from "react";
import { Link } from "react-router-dom";
import PriceBox from "../Home/PriceBox";
import Accordion from "../Qna/Accordion";
import PageSearch from "../Qna/PageSearch";
import "./featcure.css";
import FeaturesAccordion from "./FeaturesAccordion";
import { feature, data } from "../../../data";

function Featcure() {
  const [record, setRecord] = useState(feature);
  const [user, setData] = useState(data);
  return (
    <>
      <section id="nav-bottom">
        <div className="bottom-in">
          <div className="left-bottom">
            <h1>30-Day Free Personal Trainer Software Trial</h1>
            <p>
              With Scheduliser, we’ve created an innovative tool for personal
              trainers that you can try for 30days FREE! With features such as
              appointment management, auto- reminders for clients, and easy
              invoice sending, Scheduliser is the best free personal trainer
              software that you can try for 30days. After the 30-day trial,
              you’d definitely agree that it’s the app for personal trainers
              that no fitness professional should ever be without.
            </p>
            <br />
            <p>
              Scheduliser isn’t just an impressive calendar, nor just accounting
              software for personal trainers–it is an intuitive personal
              assistant that manages all those little tasks you could sure do
              without while helping you grow your business in real-time. As one
              of the best free apps for personal trainers that you can try for
              30 days, Scheduler will prove to be an invaluable tool for your
              fitness business.
            </p>
            <br />
            <p>
              Take advantage of the free personal trainer app trial for 30-days
              and experience how Scheduliser works for you and your business.
              With business insights and advice from finance experts, all
              available on an easy-to-use dashboard that gives you a business
              overview at a glance, you’re sure to have your fitness business on
              the right track.
            </p>
            {record.map((record) => (
              <FeaturesAccordion key={record.id} {...record} />
            ))}

            <div className="notes">
              <p>
                Our app is{" "}
                <Link to="#">designed exclusively for personal trainers</Link> ,
                packed with the features you need to help make your day-to-day
                easier while you work on growing your business.
              </p>
              <br />
              <p>
                With just one monthly subscription, you get access to every
                Scheduliser feature available – including unlimited SMS/email
                reminders, business hours management, health history
                information, and more – everything you need in free personal
                trainer software that takes your business to the next level.
              </p>
              <br />
              <p>
                With 24/7 customer support, secure data protection, and a low
                monthly cost, what are you waiting for?
              </p>
              <br />
              <p>
                Why not start growing your business today? Download the OXY33
                Scheduliser app and start your free thirty-day trial.
              </p>
            </div>
          </div>

          <div className="right-bottom">
            <PriceBox />
          </div>
        </div>
      </section>

      <section className="Ram">
        <PageSearch />
        {user.map((data) => (
          <Accordion key={data.id} {...data} />
        ))}
      </section>
    </>
  );
}

export default Featcure;
