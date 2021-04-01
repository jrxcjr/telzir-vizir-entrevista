import React from "react";
import NumberTypeComponent from "../form/NumberTypeComponent";
import TableDisplayResults from "../form/TableDisplayResults";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import SelectTypeComponent from "./SelectTypeComponent";
import SelectTypeComponentPlans from "./SelectTypeComponentPlans";

class MyFormFinal extends React.Component {
 constructor(props) {
  super(props);
  this.ref = React.createRef();
  this.computedData = {};
  this.totalCost = 0;
  this.totalCostWithPlan = 0;

  this.handleSubmit = this.handleSubmit.bind(this);
  this.calculationComponent = this.calculationComponent.bind(this);
  this.planModifierComponent = this.planModifierComponent.bind(this);
 }

 handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  for (let key of formData.keys()) {
   this.computedData[key] = formData.get(key);
  }
  this.setState({ totalCost: "bla" });
  this.calculationComponent();
  this.planModifierComponent();
  console.log(this.computedData, this.totalCost, this.totalCostWithPlan);
 }

 calculationComponent() {
  const list = [
   { origin: "011", destination: "016", cost: 1.9 },
   { origin: "016", destination: "011", cost: 2.9 },
   { origin: "011", destination: "017", cost: 1.7 },
   { origin: "017", destination: "011", cost: 2.7 },
   { origin: "011", destination: "018", cost: 0.9 },
   { origin: "018", destination: "011", cost: 1.7 },
  ];

  const item = list.find(
   (item) =>
    item.origin === this.computedData.callOrigin &&
    item.destination === this.computedData.callDestination
  );

  if (!item) {
   throw Error(
    "This combination does not exist, Please Reload the Page Try Another One"
   );
  }

  console.log(
   "o valor foi sem o plano => ",
   Number(this.computedData.minutes) * item.cost
  );
  this.totalCost = parseInt(this.computedData.minutes) * item.cost;
 }

 planModifierComponent() {
  const plans = [
   { name: "falemais30", value: 30 },
   { name: "falemais60", value: 60 },
   { name: "falemais120", value: 120 },
  ];
  const plan = plans.find((p) => p.name === this.computedData.faleMaisPlan);

  if (!plan) {
   throw new Error("Plan Not Found");
  }

  console.log("o valor foi com o plano => ", this.totalCost - plan.value);
  this.totalCostWithPlan = Number(this.totalCost) - plan.value;
 }

 //@TODO: IMPORT THE COMPONENTS TO MERGE IT WITH THE EXISTING THINGS
 //OK ON THE EXPORT FRONTS

 render() {
  return (
   <div id="formContainer" className="formContainer">
    <form onSubmit={this.handleSubmit}>
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
    {!!this.totalCostWithPlan ? (
     <div className="resultsContainer">
      <Container>
       <TableDisplayResults
        FirstGroup={this.computedData.callOrigin}
        SecondGroup={this.computedData.callDestination}
        ThirdGroup={this.computedData.minutes}
        FourthGroup={this.computedData.faleMaisPlan}
        FifthGroup={this.totalCost}
        SixthGroup={this.totalCostWithPlan}
        SeventhGroup={this.computedData.faleMaisPlan}
       ></TableDisplayResults>
      </Container>
     </div>
    ) : null}
   </div>
  );
 }
}

export default MyFormFinal;
