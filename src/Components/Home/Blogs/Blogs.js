import React, { useEffect, useState } from "react";
import AllBlog from "../AllBlog/AllBlog";

const Blogs = ({category}) => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("https://young-stream-99018.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <section className="homeSection">
      <div className="container">
        <div className="row">
          {blog.length === 0 && (
            <div className="spinnerStyle  m-auto">
              <button className="btn btn-primary" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </button>
            </div>
          )}

          {category==='all' && blog.map((pd) => (
            <AllBlog blog={pd} key={pd._id}></AllBlog>
          ))}

          {category==='top' && blog.slice(-6).map((pd) => (
            <AllBlog blog={pd} key={pd._id}></AllBlog>
          ))}

           {blog.filter(bg => bg.category === category).map((pd) => (
            <AllBlog blog={pd} key={pd._id}></AllBlog>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Blogs;
