import React from "react";
import { Form } from "react-bootstrap";

function NumberTypeComponent(props) {
 return (
  <div>
   <Form.Label>Call Minutes : </Form.Label>
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
