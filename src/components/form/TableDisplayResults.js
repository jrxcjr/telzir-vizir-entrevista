import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function TableDisplayResults(props) {
 return (
  <ListGroup>
   <ListGroup.Item>
    Your call originated From DDD: {props.FirstGroup}{" "}
   </ListGroup.Item>
   <ListGroup.Item>
    Your Call had the Destination to DDD: {props.SecondGroup}
   </ListGroup.Item>
   <ListGroup.Item>Your Call had {props.ThirdGroup} Minutes </ListGroup.Item>
   <ListGroup.Item>
    You have the Fale mais Plan: {props.FourthGroup}{" "}
   </ListGroup.Item>
   <ListGroup.Item>
    Without a plan your call price was ${props.FifthGroup}
   </ListGroup.Item>
   <ListGroup.Item>
    Your call price was ${props.SixthGroup} because you have a plan, and your
    plan is "{props.SeventhGroup}"
   </ListGroup.Item>
  </ListGroup>
 );
}

export default TableDisplayResults;
