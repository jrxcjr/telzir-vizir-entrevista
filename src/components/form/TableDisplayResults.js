import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function TableDisplayResults(props) {
 return (
  <ListGroup>
   <ListGroup.Item>
    Your call originated From DDD: <strong>{props.FirstGroup}</strong>
   </ListGroup.Item>
   <ListGroup.Item>
    Your Call had the Destination to DDD: <strong>{props.SecondGroup}</strong>
   </ListGroup.Item>
   <ListGroup.Item>Your Call had <strong>{props.ThirdGroup}</strong> Minutes </ListGroup.Item>
   <ListGroup.Item>
    You have the Fale mais Plan: <strong>{props.FourthGroup}</strong>
   </ListGroup.Item>
   <ListGroup.Item>
    Without a plan your call price would be $<strong>{props.FifthGroup}</strong>
   </ListGroup.Item>
   <ListGroup.Item>
    Your call price was $<strong>{props.SixthGroup}</strong> because you have a plan, and your
    plan is "<strong>{props.SeventhGroup}</strong>"
   </ListGroup.Item>
  </ListGroup>
 );
}

export default TableDisplayResults;
