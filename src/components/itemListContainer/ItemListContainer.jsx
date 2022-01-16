import React, {useEffect, useState} from "react";
import { Container, Spinner } from "reactstrap";
import ItemList from "../itemList/itemList";
import { obtainProducts } from '../../helpers/mocks'

function ItemListContainer({ greeting }) {
    const [productsObtained, setProductsObtained] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        obtainProducts.then(res => setProductsObtained(res))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        //setProductsObtained(res)
    }, [])


  return (
      <Container className="bg-light border" fluid>
          <p className="my-5 h3">{greeting}</p>
          <br />
          {
              loading ?   <Spinner color="primary" type="border" /> : <ItemList products={productsObtained} />
          }
      </Container>
  )
}

export default ItemListContainer;
