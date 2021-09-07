import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
  

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <span>This is your secret Admin Panel</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <span>Don't make admin a unfaith person.</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <span>Be cautious before delete any News!</span>
                    </Link>
                </li>

                <li>
                    <Link to="/" className="text-white">
                        <span>Add proper news for user by addBlog</span>
                    </Link>
                </li>
            
            </ul>
          
        </div>
    );
};

export default Sidebar;