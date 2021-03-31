import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function BootstrapNavbar(props) {
 return (
  <React.Fragment>
   <div>
    <Navbar className="bg-#201db3" bg="dark" variant="dark">
     <Navbar.Brand href="#home">TELZIR</Navbar.Brand>
     <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#plans">Plans</Nav.Link>
      <Nav.Link href="#callcalculator">Call Calculator</Nav.Link>
     </Nav>
     <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
     </Form>
    </Navbar>
   </div>
  </React.Fragment>
 );
}

export default BootstrapNavbar;
