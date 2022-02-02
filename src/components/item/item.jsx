import React from "react";
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Badge, Button,
} from "reactstrap";
import {Link} from "react-router-dom";

function Item({id, title, subtitle, description, amount, image}) {

    function onAdd(quantity) {
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
                <Link className='my-2 mx-2' to={`/detail/${id}`}>
                    <Button className='my-2 mx-2' color="secondary">
                        Product details
                    </Button>
                </Link>
            </CardBody>
        </Card>
    )
}

export default Item;