import React from 'react';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

const GoToCart = () => {
    return (
        <Link to='/cart'>
            <Button className='my-2 mx-2'
                color="primary" outline >
                Go to cart
            </Button>
        </Link>
    );
};

export default GoToCart;
