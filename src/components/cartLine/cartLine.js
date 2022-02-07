import React, {useContext} from 'react';
import {Button} from "react-bootstrap";
import {ContextApp} from "../../App";
import {ProductToAdd} from "../../functions/funcions";

const CartLine = ({item}) => {
    const {removeItemFromCart} = useContext(ContextApp)

    const handlerDeleteCartItem = () => {
        let prod = new ProductToAdd(item.id, item.quantity)
        removeItemFromCart(prod)
    }

    return (
        <>
            <tr>
                <th scope="row">
                    {item.id}
                </th>
                <td>
                    {item.title}
                </td>
                <td>
                    {item.description}
                </td>
                <td>
                    {item.quantity}
                </td>
                <td>
                    $ {item.price}
                </td>
                <td>
                    $ {item.total}
                </td>
                <td>
                    <Button style={{backgroundColor: "red", color: "white"}} onClick={handlerDeleteCartItem}>X</Button>
                </td>
            </tr>
        </>
    );
};

export default CartLine;