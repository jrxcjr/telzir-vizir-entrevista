import React from "react";
import CardComponent from "../cards/CardComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

class CardComposer extends React.Component {
 render() {
  return (
    <div id='cardComponentContainer'>
        <h2>Call Plan Selection</h2>
   <div className="cardComponentContainer"> 
    <Container>
     <Row>
      <Col>
       <CardComponent minutes="30"></CardComponent>
      </Col>
      <Col>
       <CardComponent minutes="60"></CardComponent>
      </Col>
      <Col>
       <CardComponent minutes="120"></CardComponent>
      </Col>
     </Row>
    </Container>
   </div>
   </div>
  );
 }
}

export default CardComposer;
