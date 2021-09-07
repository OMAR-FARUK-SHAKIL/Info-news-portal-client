import React from "react";
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <Navbar bg="info" expand="lg">
      <Navbar.Brand className="text-warning font-weight-bold h1" as={Link} to="/home">Info News portal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="m-auto">
          <Nav.Link className="font-weight-bold" as={Link} to="/home"> All News</Nav.Link>
          <Nav.Link className="font-weight-bold ml-1" as={Link} to="/home"> Domestic News</Nav.Link>
          <Nav.Link className="font-weight-bold ml-1" as={Link} to="/international"> International News</Nav.Link>
          <Nav.Link className="font-weight-bold ml-1" as={Link} to="/home"> Sports News</Nav.Link>
          <Nav.Link className="font-weight-bold ml-1" as={Link} to="/admin">Admin</Nav.Link>
          <Button className="btn-success font-weight-bold ml-2" as={Link} to="/logIn">LogIn</Button>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-warning">Search</Button>
        </Form>
        
      </Navbar.Collapse>
    </Navbar>

  );
};

export default Header;