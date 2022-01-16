import React from "react";
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Badge,
} from "reactstrap";
import ItemCount from "../itemCount/itemCount";

function Item({title, subtitle, description, stock, amount, image, initial }) {

    function onAdd(quantity){
        //fetch para agregar articulo al carrito
        alert(`Se ha agregado al carrito el articulo ${title}, cantidad ${quantity}`)
    }

    return (
        <Card className='mx-1 my-1'>
            <CardImg
                alt="Card image cap"
                src={image}
                top
                width="100%"
            />
            <CardBody className='d-flex flex-column'>
                <CardTitle tag="h5">
                    {title}
                </CardTitle>
                <CardSubtitle
                    className="text-muted"
                    tag="h6"
                >
                    {subtitle}
                </CardSubtitle>
                <CardText className='mt-auto'>
                    {description}
                </CardText>
                <Badge text color="primary" className='px-5 py-3 my-2'>
                    U$S {amount}
                </Badge>
                <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
            </CardBody>
        </Card>
    )
}

export default Item;