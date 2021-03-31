import React from 'react'
import NumberTypeComponent from "../form/NumberTypeComponent";
import TableDisplayResults from "../form/TableDisplayResults";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import SelectTypeComponent from "./SelectTypeComponent";
import SelectTypeComponentPlans from "./SelectTypeComponentPlans";
import './MyFormFinalMethods'


class FormComposer extends React.Component {
    constructor(props) {
    super(props)
        this.computedData = {}
        this.totalCost = 0;
        this.totalCostWithPlan = 0;
        this.onSubmit= {}
    }
    computedData = {}

    render (){
        return (
            <div>
             <form onSubmit={this.onSubmit}>
              <Container>
               <Row>
                <Col>
                 <SelectTypeComponent name="callOrigin"
                  id="callOrigin"
                  type="text"
                  output="Origin"
                  required
                  ></SelectTypeComponent>
                  <SelectTypeComponent name="callDestination"
                  id="callDestination"
                  type="text"
                  output="Destination"
                  required
                  ></SelectTypeComponent>
                 <NumberTypeComponent
                  name="minutes"
                  type="text"
                  id="minutes"
                  pattern="[0-9]{3}"
                  required
                 ></NumberTypeComponent> 
                 <SelectTypeComponentPlans id="FaleMaisPlan"
                  name="faleMaisPlan"
                  label="Fale Mais"></SelectTypeComponentPlans>
                 <br></br>
                 <button className="bttn-blue-submit">Send the Data!</button>
                </Col>
               </Row>
              </Container>
              {!!this.totalCostWithPlan ? (
              <div className="resultsContainer">
               <Container>
                <Col>
                 <TableDisplayResults
                  FirstGroup={MyFormMethods.computedData.callOrigin}
                  SecondGroup={MyFormMethods.computedData.callDestination}
                  ThirdGroup={MyFormMethods.computedData.minutes}
                  FourthGroup={MyFormMethods.computedData.faleMaisPlan}
                  FifthGroup={MyFormMethods.totalCost}
                  SixthGroup={MyFormMethods.totalCostWithPlan}
                  SeventhGroup={MyFormMethods.computedData.faleMaisPlan}
                 ></TableDisplayResults>
                </Col>
               </Container>
              </div>
             ) : null}
             </form>
             </div>
            
           );
    }
    
}

export default FormComposer;