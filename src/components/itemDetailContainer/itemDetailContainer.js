import React, {useEffect, useState} from 'react';
import {Container, Spinner} from "reactstrap";
import ItemDetail from "../itemDetail/itemDetail";
import {useParams} from "react-router-dom";
import img from '../../assets/bkgImg2.png';
import {getProductByIDFromFirebase} from "../../functions/funcions";
import {getDoc} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const {id} = useParams()

    useEffect(()=>{
        getDoc(getProductByIDFromFirebase(id))
            .then(resp => (setProduct({id: resp.id, ...resp.data()})))
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
