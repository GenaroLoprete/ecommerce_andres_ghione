import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

function ProductCard(props) {
  return (
    <Card>
      <CardImg alt="Card image cap" src='' top width="100%" />
      <CardBody>
        <CardTitle tag="h5">{props.titulo}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Card subtitle
        </CardSubtitle>
        <CardText>{props.detalle}</CardText>
        <Button>$ {props.precio}</Button>
      </CardBody>
    </Card>
  );
}

export default ProductCard;
