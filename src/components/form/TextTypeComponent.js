import React from "react";
import Form from "react-bootstrap/Form";

function CallOriginComponent(props) {
 return (
  <div>
   <Form.Label>Select your Call {props.output} :</Form.Label>
   <Form.Control
    name={props.name}
    type={props.type}
    id={props.id}
    placeholder={props.placeholder}
    output={props.output}
   ></Form.Control>
  </div>
 );
}

export default CallOriginComponent;
