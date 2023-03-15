import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Post({ id, title, des, date, img }) {
  return (
    <>
      <div className="grid__item">
        <img src={img} alt="" />
        <div className="grid__des">
          <Link href="#" className="button">
            {title}
          </Link>

          <Link href="#" className="button-1">
            {des}
          </Link>

          <span>
            <CalendarMonthIcon />
            <p>{date.toLocaleDateString()}</p>
          </span>
        </div>
      </div>
    </>
  );
}

export default Post;
