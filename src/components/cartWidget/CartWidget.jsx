import React, {useContext, useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
import {ContextApp} from "../../App";
import {Badge} from "react-bootstrap";

function CartWidget() {
    const {productsInCart} = useContext(ContextApp)
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        hanlderQuantity()
    }, [productsInCart]);

    const hanlderQuantity = () => {
        let total = 0
        productsInCart.forEach(product => {
            total += product.quantity
        })
        setQuantity(total)
    }

    return (
        productsInCart.length > 0?
            <span> <Badge color="primary" pill>{quantity}</Badge> <FontAwesomeIcon icon={faShoppingBasket} /> </span> :
            <></>
    )
}

export default CartWidget
