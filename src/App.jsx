import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  class Producto {
    constructor(titulo, descripcion, imagen, precio) {
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.precio = precio;
    }
  }

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
