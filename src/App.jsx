import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import Cart from "./components/cart/cart";
import {createContext, useEffect, useState} from "react";

export const ContextApp = createContext("tutiApp")

function App() {
    const [productsInCart, setProductsInCart] = useState([])

    const addItemToCart = (productToAdd) => {
        let productIndex = isInCart(productToAdd.id);
        if (productIndex !== -1) {
            productsInCart[productIndex].quantity = productsInCart[productIndex].quantity + productToAdd.quantity;
        } else {
            setProductsInCart([...productsInCart, productToAdd])
        }
    }

    const removeItemFromCart = (productToDelete) => {
        let productIndex = isInCart(productToDelete.id);
        if (productIndex !== -1) {
            productsInCart.splice(productIndex, 1)
        }
    }

    const modifyQuantity = (productToModify, quantity) => {
        let productIndex = isInCart(productToModify.id);
        if (productIndex !== -1){
            if(quantity <= 0){
                removeItemFromCart(productToModify);
            } else {
                productsInCart[productIndex].quantity = quantity;
            }
        }
    }

    const clear = () => {
        setProductsInCart([])
    }

    const isInCart = (id) => {
        let productIndex = productsInCart.findIndex(element => element.id == id);
        return productIndex;
    }

    return (
        <ContextApp.Provider value={{ isInCart, addItemToCart, removeItemFromCart, modifyQuantity, clear }}>
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Routes>
                        <Route exact path='/' element={<ItemListContainer greeting="Welcome to TUTI-TIENDA !"/>}/>
                        <Route exact path='/category/:categoryID'
                               element={<ItemListContainer greeting="Bienvenido a TUTI-TIENDA !"/>}/>
                        <Route exact path='/detail/:id' element={<ItemDetailContainer/>}/>
                        <Route exact path='/cart' element={<Cart/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </ContextApp.Provider>
    );
}

export default App;
