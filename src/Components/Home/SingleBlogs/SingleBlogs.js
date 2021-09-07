import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlogs = () => {
    const {id} = useParams()
    const [blog, setBlog] = useState({})
    useEffect(() => {
        // fetch(`https://thawing-inlet-19227.herokuapp.com/blogById/${id}`)
         fetch(`https://young-stream-99018.herokuapp.com/blogById/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setBlog(data);
          });
      }, [id])
    
    return (
        <div className="container">
           <div className='text-center m-auto p-5'>
             <h3>{blog.title}</h3><br/>
               <img src={blog.img} alt="" className="img-fluid mb-3" />
               <h5>Written by: <b>{blog.author}</b></h5><br/>
               <strong>{blog.description}</strong>
           </div>
        </div>
    );
};

export default SingleBlogs;