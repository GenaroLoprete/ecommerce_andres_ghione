import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer
        greeting="Bienvenido a TUTI-TIENDA !"
      />
    </div>
  );
}

export default App;
