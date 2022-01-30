import React from 'react';
import {Badge, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";

function ItemDetail({product}) {
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
                </CardBody>
            </Card>
        </div>
    )
}

export default ItemDetail;
