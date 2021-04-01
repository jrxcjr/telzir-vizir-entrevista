import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function BootstrapNavbar(props) {
 return (
  <Navbar
   collapseOnSelect
   fixed="top"
   className="navbarElement"
   bg="dark"
   variant="dark"
  >
   <Navbar.Brand href="#home">
    <img
     alt=""
     src="https://vizir.com.br/wp-content/uploads/2020/04/logo.svg"
     width="30"
     height="30"
     className="d-inline-block align-top"
    />{" "}
    Vizir Telzir
   </Navbar.Brand>
   <Nav className="mr-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#cardComponentContainer">Plans</Nav.Link>
    <Nav.Link href="#formContainer">Call Calculator</Nav.Link>
   </Nav>
   <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-info">Search</Button>
   </Form>
  </Navbar>
 );
}

export default BootstrapNavbar;
