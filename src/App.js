import "./App.css";
import BootstrapNavBar from "./components/navbar/BootstrapNavbar";
// import MyForm from "./components/MyForm";
import JumbotronTelZir from "./components/jumbotron/JumbotronTelZir";
import CardComposer from "./components/cards/CardComposer";
import Footer from "./components/footer/Footer";
import { MyFormFields } from "./components/form/MyFormFields";

function App() {
 return (
  <div className="App">
   <BootstrapNavBar />
   <JumbotronTelZir />
   <CardComposer />
   <MyFormFields/>
   <Footer />
  </div>
 );
}

export default App;
