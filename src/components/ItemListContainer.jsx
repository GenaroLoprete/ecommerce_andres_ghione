import React from "react";
import { Container, CardGroup } from "reactstrap";
import ProductCard from "./ProductCard";

function ItemListContainer({ greeting, productos }) {
  return (
    <Container className="bg-light border" fluid>
      <p className="my-5 h3">{greeting}</p>
      <CardGroup>
        { 
            productos.forEach(element => {
                alert('Holis')
            })
        }
      </CardGroup>
    </Container>
  );
}

export default ItemListContainer;
