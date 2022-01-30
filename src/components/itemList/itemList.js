import React from 'react';
import Item from "../item/item";
import {CardGroup} from "reactstrap";

function ItemList({products}) {
    return (
        <CardGroup>
            {
                products.map((product) => (
                    <Item id={product.id} title={product.title} subtitle={product.subtitle}
                          description={product.description} stock={product.stock}
                          amount={product.amount} image={product.image} initial={ product.stock > 0 ? 1 : 0 } />
                ))
            }
        </CardGroup>
    );
}

export default ItemList;