import React from "react";
import Form from "react-bootstrap/Form";

function CheckBoxTypeComponent(props) {
 return (
  <div>
   <Form.Check
    name={props.name}
    type={props.type}
    id={props.id}
    value={props.value}
    label={props.label}
   ></Form.Check>
  </div>
 );
}

export default CheckBoxTypeComponent;
