import React from "react";
import { Container, CardGroup } from "reactstrap";

function ItemListContainer({ greeting, productos }) {
  return (
    <Container className="bg-light border" fluid>
      <p className="my-5 h3">{greeting}</p>
      <CardGroup>
      </CardGroup>
    </Container>
  );
}

export default ItemListContainer;
