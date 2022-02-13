import React, {useEffect, useState} from "react";
import {Container, Spinner} from "reactstrap";
import ItemList from "../itemList/itemList";
import {filterByCategory} from '../../helpers/mocks'
import {useParams} from "react-router-dom";
import {createContainerWithSpecificSize, getAllProductsFromFirebase} from "../../functions/funcions";
import img from '../../assets/bkgImg2.png';
import {getDocs} from "firebase/firestore";

function ItemListContainer({greeting}) {
    const [productsObtained, setProductsObtained] = useState([])
    const [loading, setLoading] = useState(true)
    const [productsByComponents, setProductsByComponents] = useState([])

    const {categoryID} = useParams()

    useEffect(() => {
        setProductsObtained([])
        getDocs(getAllProductsFromFirebase())
            .then(resp => setProductsObtained(resp.docs.map(prod => (
                {id: prod.id, ...prod.data()}
            ))))
            .finally(() => {
                setLoading(false)
            })
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
