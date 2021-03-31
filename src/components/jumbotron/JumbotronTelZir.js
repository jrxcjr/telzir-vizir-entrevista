import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function JumbotronTelZir(props) {
 return (
  <div className="jumbotronContainer">
   <Jumbotron fluid className="jumbotronElement">
    <Container>
     <h1>Telzir Telecom</h1>
     <p>
      Welcome to Telzir Telecom, here we want to help you connect with who you
      love.
     </p>
    </Container>
   </Jumbotron>
  </div>
 );
}

export default JumbotronTelZir;
