import React from "react";
import Card from "react-bootstrap/Card";

function CardComponent(props) {
 return (
  <Card style={{ width: "18rem" }}>
   <Card.Body>
    <Card.Title>Fale Mais Plan {props.minutes}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">
     {props.minutes} minutes
    </Card.Subtitle>
    <Card.Text>
     This plan has {props.minutes} minutes and will help you to communicate
     saving some money. This plan is recommended to those who talk a lot on the
     cellphone.
    </Card.Text>
    <Card.Link className="bttn-blue" href="#">
     Sign up
    </Card.Link>
    <Card.Link className="bttn-blue" href="#">
     Show Me More
    </Card.Link>
   </Card.Body>
  </Card>
 );
}

export default CardComponent;
