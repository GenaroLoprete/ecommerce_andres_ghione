import React from 'react';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

const GoToCart = () => {
    return (
        <Link to='/cart'>
            <Button className='my-2 mx-2'   //'my-1 px-5 '
                color="primary" outline >
                Go to cart
            </Button>
        </Link>
    );
};

export default GoToCart;
