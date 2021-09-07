import React from "react";
import Blogs from "../Blogs/Blogs";
import Slideshow from "./Slideshow";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="feature-image">
        <div className="feature-text">
          <Slideshow/>
          <h1 className="heading">Welcome to the Info-News Portal  </h1>
        </div>
      </div>
      <Blogs />
    </div>
  );
};

export default Home;
