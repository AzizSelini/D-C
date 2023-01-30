import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

import NavBar from './Navbar component/NavBar';
import { useState, useContext } from 'react';
import AllProduct from './AllProduct.js';
// import { Store } from './Store';
export default function Itemstemplate() {
  // const [state, dispatch] = useContext(Store);
  const allProd = useContext(AllProduct);

  const data1 = allProd.products;

  // const addToCart = () => {
  //   dispatch({ type: 'CART_ADD_ITEM', payload: { ...allProd, quantity: 1 } });
  // };
  return (
    <>
      <NavBar />

      {data1.map((e: any) => {
        return (
          <CardGroup id="groupitems" key={e._id}>
            <Card className="groupitemCard">
              <Card.Img variant="top" src={e.image} />
              <Card.Body>
                <Card.Title> {e.name} </Card.Title>
                <Card.Text>{e.description}</Card.Text>
              </Card.Body>
              <h2>${e.price}</h2>

              <Button
                variant="outline-dark"
                className="snipcart-add-item"
                data-item-id={e._id}
                data-item-price={e.price}
                data-item-description={e.description}
                data-item-image={e.image}
                data-item-name={e.name}
              >
                Add to cart
              </Button>

              <Card.Footer>
                <small className="text-muted">{e.date_added}</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        );
      })}
    </>
  );
}
