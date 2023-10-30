import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Message from '../component/Message'
import { addToCart } from '../actions/cartAction'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'


const CartScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate to programmatically navigate
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const qty = new URLSearchParams(window.location.search).get('qty') || 1;
  console.log(cartItems)

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty))
    }
  }, [dispatch, id, qty])

  return (
    <div>
      <Link to="/products">Back to Products</Link>
      <h1>Shopping Cart</h1>
      <Row>
        {/* Display cart items */}
        {cartItems.map(item => (
          <Col key={item.product} md={4}>
            {/* Item details */}
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.qty}</p>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default CartScreen