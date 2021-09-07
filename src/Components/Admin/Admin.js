import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRouteMatch, Switch, Route } from "react-router-dom";
import ManageBlog from "./ManageBlog/ManageBlog";
import AddBlog from "./AddBolg/AddBlog";
import "./Admin.css";
import { UserContext } from '../../App';
import AddAdmin from './AddAdmin/AddAdmin';

const Admin = () => {
  let { path, url } = useRouteMatch();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(' https://shrouded-thicket-71402.herokuapp.com/isAdmin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email })
    })
      .then(res => res.json())
      .then(data => setIsAdmin(data));
  }, [])



  return (
    <div>
      {isAdmin ? <div>
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
            <Link to={`${url}/home`}>Log Out</Link>
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
          <Route path={`${path}/addAdmin`}>
            <AddAdmin />
          </Route>
        </Switch>
      </div>
        :
        <div>
          <h2>You are not Recognized Admin!</h2>
          <h5> The addNews,ManageNews,DeleteNews,AddAdmin etc. are only accessible for authentic Admin</h5>
        </div>
      }
    </div>
  );
};

export default Admin;
