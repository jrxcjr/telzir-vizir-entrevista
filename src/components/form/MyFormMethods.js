import ReactDOM from 'react-dom'
import RenderMyFormResult from "./RenderMyFormResult";
// import NumberTypeComponent from "./NumberTypeComponent";
// import TableDisplayResults from "./TableDisplayResults";
// import Col from "react-bootstrap/Col";
// import { Container } from "react-bootstrap";
// import Row from "react-bootstrap/Row";
// import SelectTypeComponent from "./SelectTypeComponent";
// import SelectTypeComponentPlans from "./SelectTypeComponentPlans";


let computedData={}
let totalCost= 0
let totalCostWithPlan= 0

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData)
  for (let key of formData.keys()) {
   computedData[key] = formData.get(key);
  }
  calculationComponent();
  planModifierComponent();
  console.log(computedData, totalCost, totalCostWithPlan);
  const functionResults = RenderMyFormResult(computedData,totalCost,totalCostWithPlan)
  ReactDOM.render(functionResults,document.getElementById('containerForResults'))
}


function calculationComponent() {
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
    item.origin === computedData.callOrigin &&
    item.destination === computedData.callDestination
  );

  if (!item) {
   throw Error(
    "This combination does not exist, Please Reload the Page Try Another One"
   );
  }

  console.log(
   "o valor foi sem o plano => ",
   Number(computedData.minutes) * item.cost
  );
  totalCost = parseInt(computedData.minutes) * item.cost;
 }


function planModifierComponent() {
  
  const plans = [
   { name: "falemais30", value: 30 },
   { name: "falemais60", value: 60 },
   { name: "falemais120", value: 120 },
  ];
  const plan = plans.find((p) => p.name === computedData.faleMaisPlan);

  if (!plan) {
   throw new Error("Plan Not Found");
  }

  console.log("o valor foi com o plano => ", totalCost - plan.value);
  totalCostWithPlan = Number(totalCost) - plan.value;
}



export {computedData,totalCost,totalCostWithPlan}
export default handleSubmit
