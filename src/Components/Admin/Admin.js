import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRouteMatch, Switch, Route } from "react-router-dom";
import ManageBlog from "./ManageBlog/ManageBlog";
import AddBlog from "./AddBolg/AddBlog";
import "./Admin.css";
import { UserContext } from '../../App';

const Admin = () => {
  let { path, url } = useRouteMatch();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
      fetch('https://young-stream-99018.herokuapp.com/isAdmin', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ email: loggedInUser.email })
      })
          .then(res => res.json())
          .then(data => setIsAdmin(data));
  }, [])

  return (
    <div>
   { isAdmin ? <div>
      <ul>
        <li>
          <Link to={`${url}/addBlog`}>Add Blog</Link>
        </li>
        <li>
          <Link to={`${url}/manageBlog`}>Manage Blog</Link>
        </li>
        <li>
          <Link to={`${url}/addAdmin`}>Add Admin</Link>
        </li>
        <li>
          <Link to={`${url}/`}>Log Out</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <ManageBlog />
        </Route>
        <Route path={`${path}/manageBlog`}>
          <ManageBlog />
        </Route>
        <Route path={`${path}/addBlog`}>
          <AddBlog />
        </Route>
      </Switch>
    </div>
    :
    <h2>You are not Recognized Admin</h2>
   }
   </div>
  );
};

export default Admin;
