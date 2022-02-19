import React, {useContext, useEffect, useState} from 'react';
import {Button, Table} from "react-bootstrap";
import {ContextApp} from "../../App";
import {calculatePrice, formatTotal, printCartProductsDetails} from "../../functions/funcions";
import CartLine from "../cartLine/cartLine";
import NoItemsInCart from "../noItemsInCart/NoItemsInCart";
import {Link} from "react-router-dom";

export const Cart = () => {
    const [content, setContent] = useState([])
    const [price, setPrice] = useState('0')
    const {productsInCart} = useContext(ContextApp)

    useEffect(() => {
        calculatePrice(productsInCart).then((price) => setPrice(formatTotal(price)))
        if(productsInCart.length > 0){
            printCartProductsDetails(productsInCart)
                .then((products) => setContent(products))
        }
    }, [productsInCart]);

    return (
        productsInCart.length === 0 ? <NoItemsInCart /> :
        <>
            <Table responsive>
                <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Quantity
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Total line
                    </th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    content.map(item => {{ return <CartLine item={item} /> }})
                }
                </tbody>
            </Table>
            <div>
                <Link to='/purchase'><Button color="success">To Pay - $ {price}</Button></Link>
            </div>
        </>
    );
};

export default Cart;
