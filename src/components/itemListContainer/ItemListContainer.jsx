import React, {useEffect, useState} from "react";
import {Container, Spinner} from "reactstrap";
import ItemList from "../itemList/itemList";
import {filterByCategory, obtainProductsV2} from '../../helpers/mocks'
import {useParams} from "react-router-dom";
import {createContainerWithSpecificSize} from "../../functions/funcions";

function ItemListContainer({greeting}) {
    const [productsObtained, setProductsObtained] = useState([])
    const [loading, setLoading] = useState(true)
    const [productsByComponents, setProductsByComponents] = useState([])

    const {categoryID} = useParams()

    useEffect(() => {
        obtainProductsV2.then(res => {
            setProductsObtained(res);
        })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        printComponents()
    }, [categoryID, productsObtained])

    const printComponents = () => {
        let productsObtainedCopy = productsObtained
        if(categoryID != undefined) {
            let productsFiltered = filterByCategory(categoryID)
            productsObtainedCopy = productsFiltered
        }
        let productsByComponentsTemp = createContainerWithSpecificSize(5, productsObtainedCopy)
        setProductsByComponents(productsByComponentsTemp)
    }

    return (
        <Container className="bg-light border" fluid>
            <p className="my-5 h3">{greeting}</p>
            <br/>
            {
                loading ? <Spinner color="primary" type="border" /> :
                    productsByComponents.map(item => {
                        return <ItemList products={item}/>
                    })
            }
        </Container>
    )
}

export default ItemListContainer;
