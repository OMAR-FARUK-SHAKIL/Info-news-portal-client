import React, { useEffect, useState } from "react";
import Blogs from '../../Blogs/Blogs';
import Slideshow from '../../Home/Slideshow';
import "../../Home/Home.css";

const Sports = () => {
    const [blog, setBlog] = useState([]);
    let category ='sports';

    useEffect(() => {
        fetch("https://young-stream-99018.herokuapp.com/blogs")
          .then((res) => res.json())
          .then((data) => setBlog(data));
      }, []);

    return (
        <div>
        <div className="feature-image">
          <div className="feature-text">
            <Slideshow/>
            <h1 className="heading">Welcome to the Info-News Portal  </h1>
          </div>
        </div>
        <Blogs category={category}/>
      </div>
    );
};

export default Sports;


