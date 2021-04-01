import React from "react";
import NumberTypeComponent from "./NumberTypeComponent";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import SelectTypeComponent from "./SelectTypeComponent";
import SelectTypeComponentPlans from "./SelectTypeComponentPlans";
import handleSubmit from './MyFormMethods'



function MyFormFields (props) {
  return(
  <div id="formContainer" className="formContainer">
  <form onSubmit={handleSubmit}>
   <Container>
    <h2>Call Calculator</h2>
    <Row>
     <Col>
      <SelectTypeComponent
       name="callOrigin"
       id="callOrigin"
       type="text"
       output="Origin"
       className="select-element"
      ></SelectTypeComponent>
      <SelectTypeComponent
       name="callDestination"
       id="callDestination"
       type="text"
       output="Destination"
       className="select-element"
      ></SelectTypeComponent>
      <NumberTypeComponent
       name="minutes"
       type="text"
       id="minutes"
       className="select-element"
      ></NumberTypeComponent>
      <SelectTypeComponentPlans
       name="faleMaisPlan"
       id="FaleMaisPlan"
       className="select-element"
      ></SelectTypeComponentPlans>
      <br></br>
      <button className="bttn-blue">Send the Data!</button>
     </Col>
    </Row>
   </Container>
  </form>
  <div id="containerForResults" className='containerForResults'></div>
 </div>
);
}

export {MyFormFields};