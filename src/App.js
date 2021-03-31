import "./App.css";
import BootstrapNavBar from "./components/navbar/BootstrapNavbar";
// import MyForm from "./components/MyForm";
import JumbotronTelZir from "./components/jumbotron/JumbotronTelZir";
import CardComposer from "./components/cards/CardComposer";
import MyFormFinal from "./components/form/MyFormFinal";
import Footer from "./components/footer/Footer";

function App() {
 return (
  <div className="App">
   <BootstrapNavBar />
   <JumbotronTelZir />
   <CardComposer />
   <MyFormFinal />
   <Footer />
  </div>
 );
}

export default App;
