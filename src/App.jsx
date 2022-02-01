import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import Cart from "./components/cart/cart";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<ItemListContainer greeting="Welcome to TUTI-TIENDA !"/>} />
                    <Route exact path='/category/:categoryID' element={<ItemListContainer greeting="Bienvenido a TUTI-TIENDA !"/>} />
                    <Route exact path='/detail/:id' element={<ItemDetailContainer />} />
                    <Route exact path='/cart' element={<Cart />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
