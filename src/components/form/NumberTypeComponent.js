import React from "react";
import { Form } from "react-bootstrap";

function NumberTypeComponent(props) {
 return (
  <div className="minutes-container">
   Call Minutes:
   <br></br>
   <Form.Control
    name={props.name}
    type={props.type}
    id={props.id}
    placeholder={props.placeholder}
    pattern={props.pattern}
   ></Form.Control>
  </div>
 );
}

export default NumberTypeComponent;
