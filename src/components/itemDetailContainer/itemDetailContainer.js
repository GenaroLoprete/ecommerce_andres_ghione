import React, {useEffect, useState} from 'react';
import {getItems} from "../../helpers/mocks";
import {Container, Spinner} from "reactstrap";
import ItemDetail from "../itemDetail/itemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState('');

    useEffect(()=>{
        getItems
            .then(resp => setProduct(resp))
    }, []);

    return (
        <Container className="bg-light border" fluid>
            <p className="my-5 h3"></p>
            <br />
            {
                product === '' ?   <Spinner color="primary" type="border" /> : <ItemDetail title={product.title} subtitle={product.subtitle}
                    description={product.description} amount={product.amount} image={product.image} />
            }

        </Container>
    )
};

export default ItemDetailContainer;
