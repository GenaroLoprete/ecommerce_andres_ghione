import React from 'react';
import {Badge, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";

function ItemDetail(props, {title}) {
    return (
        <Card className='mx-1 my-1 col-4'>
            <CardImg
                alt="Card image cap"
                src={props.image}
                top
                width="100%"
            />
            <CardBody className='d-flex flex-column'>
                <CardTitle tag="h5">
                    {props.title}
                </CardTitle>
                <CardSubtitle
                    className="text-muted"
                    tag="h6"
                >
                    {props.subtitle}
                </CardSubtitle>
                <CardText className='mt-auto'>
                    {props.description}
                </CardText>
                <Badge text color="primary" className='px-5 py-3 my-2'>
                    U$S {props.amount}
                </Badge>
            </CardBody>
        </Card>
    )
}

export default ItemDetail;
