import React, {useState, useEffect, useContext} from 'react';
import {Badge, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {ProductToAdd} from "../../functions/funcions";
import ItemCount from "../itemCount/itemCount";
import GoToCart from "../goToCart/goToCart";
import {ContextApp} from "../../App";

function ItemDetail({product}) {
    const [haveSelectedProduct, setHaveSelectedProduct] = useState(false)
    const { isInCart, addItemToCart } = useContext(ContextApp)

    useEffect(() => {
        let index = isInCart(product.id)
        if(index > -1){
            setHaveSelectedProduct(true)
        }
    })

    function onAdd(quantity) {
        addItemToCart(new ProductToAdd(product.id, quantity))
        setHaveSelectedProduct(true)
    }

    return (
        <div className='offset-3 col-6'>
            <Card className='mx-1 my-1 col-12'>
                <CardImg
                    alt="Card image cap"
                    src={product.image}
                    width="50%"
                />
                <CardBody className='d-flex flex-column'>
                    <CardTitle tag="h5">
                        {product.title}
                    </CardTitle>
                    <CardSubtitle
                        className="text-muted"
                        tag="h6"
                    >
                        {product.subtitle}
                    </CardSubtitle>
                    <CardText className='mt-auto'>
                        {product.description}
                    </CardText>
                    <Badge text color="primary" className='px-5 py-3 my-2'>
                        U$S {product.amount}
                    </Badge>
                    {
                        haveSelectedProduct ? <GoToCart /> : <ItemCount stock={product.stock} initial={ product.stock > 0 ? 1 : 0 } onAdd={onAdd}/>
                    }
                </CardBody>
            </Card>
        </div>
    )
}

export default ItemDetail;
