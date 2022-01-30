import React, {useEffect, useState} from "react";
import {Container, Spinner} from "reactstrap";
import ItemList from "../itemList/itemList";
import {filterByCategory, obtainProductsV2} from '../../helpers/mocks'
import {useParams} from "react-router-dom";
import {createContainerWithSpecificSize} from "../../functions/funcions";
import img from '../../assets/bkgImg2.png';

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
        <Container className="bg-light border" style={{backgroundImage: `url(${img})`}} fluid>
            <p className="my-5 h3" style={{color:"white"}}>{greeting}</p>
            <br/>
            {
                loading ? <Spinner color="light" type="border" /> :
                    productsByComponents.map(item => {
                        return <ItemList products={item}/>
                    })
            }
        </Container>
    )
}

export default ItemListContainer;
