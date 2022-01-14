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

  let producto1 = new Producto("Heladera", "Es muy blanca", 2567.0)
  let producto2 = new Producto("Cocina", "No consume nada !", 1567.0)
  let producto3 = new Producto("Horno", "Cocina practicamente solo", 908.0)
  let producto4 = new Producto("Mesa", "Hasta entra la suegra", 1278.0)
  let producto5 = new Producto("Lampara", "Empeza a ver en tu casa !", 293.0)
  let producto6 = new Producto("Silla", "No engordes mucho !", 376.0)

  let productos = [producto1, producto2, producto3, producto4, producto5, producto6]

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer
        greeting="Bienvenido a TUTI-TIENDA !"
        items={productos}
      />
    </div>
  );
}

export default App;
