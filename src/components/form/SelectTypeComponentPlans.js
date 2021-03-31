import React, { Component } from "react";
import { Form } from "react-bootstrap";

class SelectTypeComponentPlans extends Component {
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
          Do you Have a Plan?
        <Form.Control
        name={this.props.name}
        id={this.props.id}
        label={this.props.label}
          as="select"
          custom
          onChange={this.onChange.bind(this)}
          ref={this.myRef}
        >
          <option value="falemais30">Fale Mais 30</option>
          <option value="falemais60">Fale Mais 60</option>
          <option value="falemais120">Fale Mais 120</option>
        </Form.Control>
      </div>
    );
  }
}

export default SelectTypeComponentPlans;