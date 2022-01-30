import React, {useEffect, useState} from 'react';
import {filterItem} from "../../helpers/mocks";
import {Container, Spinner} from "reactstrap";
import ItemDetail from "../itemDetail/itemDetail";
import {useParams} from "react-router-dom";
import img from '../../assets/bkgImg2.png';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const {id} = useParams()

    useEffect(()=>{
        filterItem(id).then(resp => setProduct(resp[0]))
    }, []);

    return (
        <Container className="bg-light border" style={{backgroundImage: `url(${img})`}} fluid>
            <p className="h3"/>
            <br />
            {
                product == null ? <Spinner color="light" type="border" /> : <ItemDetail product = {product} />
            }
        </Container>
    )
};

export default ItemDetailContainer;
