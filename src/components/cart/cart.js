import React, {useContext, useEffect, useState} from 'react';
import {Button, Table} from "react-bootstrap";
import {ContextApp} from "../../App";
import {printCartProductsDetails} from "../../functions/funcions";
import CartLine from "../cartLine/cartLine";
import NoItemsInCart from "../noItemsInCart/NoItemsInCart";

export const Cart = () => {
    const [content, setContent] = useState([])
    const [price, setPrice] = useState('0')
    const {productsInCart} = useContext(ContextApp)

    useEffect(() => {
        if(productsInCart.length > 0){
            calculateTotal()
            let products = printCartProductsDetails(productsInCart)
            if (content.length !== products.length){
                setContent(products)
            }
        }
    });

    const calculateTotal = () => {
        let total = 0;
        for (let i = 0; i < content.length; i++) {
            total += content[i].total;
        }
        let format = formatTotal(total)
        console.log(format)
        setPrice(format)
    }

    const formatTotal = (total) => {
        let format = total.toString()
        if (total>999 && total <= 9999) {
            return format.charAt(0).concat('.', format.substring(1, format.length))
        } else if (total>9999 && total <= 99999) {
            return format.charAt(0).concat(format.charAt(1),'.', format.substring(2, format.length))
        } else if (total>99999 && total <= 999999) {
            return format.charAt(0).concat(format.charAt(1),format.charAt(2),'.', format.substring(3, format.length))
        } else if (total>999999 && total <= 9999999){
            return format.charAt(0).concat(format.charAt(1),format.charAt(2),format.charAt(3),'.', format.substring(4, format.length))
        } else {
            return format
        }
    }

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
                        content.map(item => {
                            { return <CartLine item={item} /> }
                        })
                }
                </tbody>
            </Table>
            <div>
                <Button color="success">To Pay - $ {price}</Button>
            </div>
        </>
    );
};

export default Cart;
