import React, {useEffect} from 'react';
import Item from "../item/item";
import {CardGroup} from "reactstrap";

function ItemList({products}) {
    return (
        <CardGroup>
            {
                products.map((product) => (
                    <Item id={product.id} title={product.title} subtitle={product.subtitle}
                          description={product.description} amount={product.amount} image={product.image} />
                ))
            }
        </CardGroup>
    );
}

export default ItemList;