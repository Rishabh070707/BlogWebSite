import React, { useState } from "react";
import "./Blog.css";
import Post from "./Post";
import { blog } from "../../../data";

function Blog() {
  const [record, setRecord] = useState(blog);
  return (
    <>
      <div className="poster">
        <div className="grid">
          {record.map((data) => (
            <Post key={data.id} {...data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
