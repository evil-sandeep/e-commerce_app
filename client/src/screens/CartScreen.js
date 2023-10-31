import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Message from '../component/Message';
import { addToCart,removeFromCart } from '../actions/cartAction';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';

const CartScreen = () => {
  // Get product ID from URL
  const { id } = useParams(); 
  const dispatch = useDispatch();

  // Access cart state
  const cart = useSelector((state) => state.cart); 
  const { cartItems } = cart;

  const qty = new URLSearchParams(window.location.search).get('qty') || 1; // Get quantity from URL

  useEffect(() => {
    if (id) {
      
        // Add the selected product to the cart
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  // Function to remove an item from the cart
  const removeFromCartHandler = (id) => {
    // Implement the functionality to remove an item from the cart
    console.log(`Remove product with ID ${id}`);
    dispatch(removeFromCart(id))
  };

  // Function to proceed to checkout
  const checkOutHandler= ()=>{
    window.location.href='/login?redirect=shipping'

  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (

            // Display a message when the cart is empty
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>
                    ${item.price}
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToCart(item.product, Number(e.target.value))
                        )}>
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                SubTotal ({cartItems.reduce((acc, item) => acc + parseInt(item.qty), 0)}) items
              </h2>
              ${cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item >
            <Button type='button' className='btn-block' diasabled={cartItems.length===0} onClick={checkOutHandler}>
              Proceed To Checkout
            </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>




    </Row>
  );
};

export default CartScreen;