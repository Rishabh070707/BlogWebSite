import React from "react";
import "./Home.css";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import { Link } from "react-router-dom";
import PriceBox from "./PriceBox";
import Items from "./Items";
import Items__a from "./item";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__left">
          <div className="main">
            <h1>
              The Personal Trainer <br /> App that Helps You <br /> Manage the
              Health of <br /> Your PT Business
            </h1>

            <p>
              <strong>Scheduliser</strong>
              is a simple and intuitive personal trainer app designed for
              personal trainers. It combines the best personal trainer software
              and specialised features designed for those who work in fitness.
            </p>
            <br />
            <br />
            <p>
              Scheduliser helps you manage your PT clients in an easy-to-use
              platform with unlimited client capacity, with auto appointment
              reminders and simple invoicing.is the personal trainer app that
              boasts built-in business insights to help you save time, increase
              your return, and grow your personal training business to new
              heights. So if you’re looking for an excellent PT software in
              Australia, Scheduliser is it!
            </p>

            <div className="trail">
              <Link>Try free trail</Link>
              <Link className="video" id="link">
                Watch the video <SlowMotionVideoIcon />
              </Link>
            </div>

            <p>No credit card required</p>
          </div>
        </div>

        {/* Floting ad cart in right part starts here */}

        <div className="home__right">
          <PriceBox />
        </div>
      </div>

      <div className="items">
        <Items id={Math.random()} />
      </div>
      <div className="item">
        <Items__a id={Math.random()} />
      </div>
      <div className="items">
        <Items id={Math.random()} />
      </div>
      <div className="item">
        <Items__a id={Math.random()} />
      </div>
      <div className="items">
        <Items id={Math.random()} />
      </div>
    </>
  );
}

export default Home;
