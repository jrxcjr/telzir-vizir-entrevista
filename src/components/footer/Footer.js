import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import {
 IoEllipsisHorizontalCircleOutline,
 IoLogoAppleAppstore,
 IoLogoFacebook,
 IoLogoGoogle,
 IoLogoGooglePlaystore,
 IoLogoInstagram,
 IoLogoMedium,
 IoLogoTwitter,
 IoNewspaper,
} from "react-icons/io5";

function Footer(props) {
 return (
  <div className="footerContainer">
   <Container fluid>
    <Row>
     <Col>
      <Nav  className='footer-nav' bg="dark" variant="dark" defaultActiveKey="/home">
       <Nav.Link href="#" title="About Us">
        <IoEllipsisHorizontalCircleOutline
         color="rgba(255,255,255,.5)"
         size={22}
        ></IoEllipsisHorizontalCircleOutline>
       </Nav.Link>
       <Nav.Link href="#" title="Our Blog">
        <IoLogoMedium color="rgba(255,255,255,.5)" size={22}></IoLogoMedium>
       </Nav.Link>
       <Nav.Link href="#" title="Press Releases">
        <IoNewspaper color="rgba(255,255,255,.5)" size={22}></IoNewspaper>
       </Nav.Link>
       <Nav.Link href="#" title="Apple AppStore">
        <IoLogoAppleAppstore color="rgba(255,255,255,.5)" size={22}></IoLogoAppleAppstore>
       </Nav.Link>
       <Nav.Link href="#" title="Google Playstore">
        <IoLogoGooglePlaystore
         color="rgba(255,255,255,.5)"
         size={22}
        ></IoLogoGooglePlaystore>
       </Nav.Link>
      </Nav>
     </Col>
     <Col></Col>
     <Col className='footer-nav'>
      <Nav bg="dark" variant="dark" className="justify-content-end">
       <Nav.Link href="#" title="Instagram">
        <IoLogoInstagram color="rgba(255,255,255,.5)" size={22}></IoLogoInstagram>
       </Nav.Link>
       <Nav.Link href="#" title="Facebook">
        <IoLogoFacebook color="rgba(255,255,255,.5)" size={22}></IoLogoFacebook>
       </Nav.Link>
       <Nav.Link href="#" title="Twitter">
        <IoLogoTwitter color="rgba(255,255,255,.5)" size={22}></IoLogoTwitter>
       </Nav.Link>
       <Nav.Link href="#" title="Google +">
        <IoLogoGoogle color="rgba(255,255,255,.5)" size={22}></IoLogoGoogle>
       </Nav.Link>
      </Nav>
     </Col>
    </Row>
    <Row>
     <Col className="rowCopyright">
      Copyright &copy; 2020 by José Ricardo Xavier Cavalcanti Jr for Vizir
      Software Studio
     </Col>
    </Row>
   </Container>
  </div>
 );
}

export default Footer;
