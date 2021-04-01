import React, { Component } from "react";
import { Form } from "react-bootstrap";

class SelectTypeComponent extends Component {
 constructor() {
  super();
  this.myRef = React.createRef();
 }

 onChange() {
  console.log(this.myRef.current.value);
 }

 render() {
  return (
   <div>
    Select your Call {this.props.output}:<br></br>
    <Form.Control
     name={this.props.name}
     type={this.props.type}
     id={this.props.id}
     placeholder={this.props.placeholder}
     output={this.props.output}
     as="select"
     custom
     onChange={this.onChange.bind(this)}
     ref={this.myRef}
    >
     <option value="011">011</option>
     <option value="016">016</option>
     <option value="017">017</option>
     <option value="018">018</option>
    </Form.Control>
   </div>
  );
 }
}

export default SelectTypeComponent;
