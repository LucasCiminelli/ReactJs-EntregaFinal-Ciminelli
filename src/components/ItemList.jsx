import React from "react";
import Container from "react-bootstrap/Container";
import Item from "./Item";

const ItemList = ({ productos, title}) => {
    

  return (
    <div className="w-100">
      <h5 className="list-title ms-5 pt-5">{title}</h5>
      <Container className="w-100">
        <row>
          <div className="productos d-flex justify-content-center align-items center flex-wrap mx-1 w-100">
            {productos.map((prod) => (
              <Item producto={prod} key={prod.id} />
            ))}
          </div>
        </row>
      </Container>
    </div>
  );
};

export default ItemList;
