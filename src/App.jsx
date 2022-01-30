import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<ItemListContainer greeting="Bienvenido a TUTI-TIENDA !"/>} />
                    <Route exact path='/category/:categoryID' element={<ItemListContainer greeting="Bienvenido a TUTI-TIENDA !"/>} />
                    <Route exact path='/category/:categoryID' element={<ItemListContainer greeting="Bienvenido a TUTI-TIENDA !"/>} />
                    <Route exact path='/category/:categoryID' element={<ItemListContainer greeting="Bienvenido a TUTI-TIENDA !" />} />
                    <Route exact path='/category/:categoryID' element={<ItemListContainer greeting="Bienvenido a TUTI-TIENDA !" />} />
                    <Route exact path='/category/:categoryID' element={<ItemListContainer greeting="Bienvenido a TUTI-TIENDA !" />} />
                    <Route exact path='/category/:categoryID' element={<ItemListContainer greeting="Bienvenido a TUTI-TIENDA !" />} />
                    <Route exact path='/category/:categoryID' element={<ItemListContainer greeting="Bienvenido a TUTI-TIENDA !" />} />
                    <Route exact path='/detail/:id' element={<ItemDetailContainer />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
