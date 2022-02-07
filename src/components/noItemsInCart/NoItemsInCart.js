import React from 'react';
import {Link} from "react-router-dom";

const NoItemsInCart = () => {
    return (
        <div className="mt-5">
            <div className="mt-5">
                Hey! No products in cart.
            </div>
            <Link style={{ textDecoration: 'none' }} to="/">Go to home page</Link>
        </div>
    );
};

export default NoItemsInCart;