import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Button, Col, ListGroup, Image, Card } from 'react-bootstrap';
import Message from '../component/Message';
import CheckoutSteps from '../component/CheckoutSteps';


const PlaceOrderScreen = () => {
    const cart = useSelector(state => state.cart)

    //Calculate Order Item Prices
    const addDecimals=(num)=>{
return (Math.round(num*100)/100).toFixed(2)
    }


    cart.itemsPrice = addDecimals(cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))
    // cart.itemsPrice = parseFloat(cart.itemsPrice.toFixed(2));

    // Calculate Shipping Price
    cart.shippingPrice =addDecimals( cart.itemsPrice > 100 ? 0 : 10)
 
    //Calculate Tax Price
    cart.taxPrice =addDecimals( Number((0.15 * cart.itemsPrice).toFixed(2)))

    //Calculate Total Price
    cart.totalPrice =addDecimals( Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice) )
    const placeOrderHandler = () => {
        console.log('PlaceOrder')
    }
    return (
        <>
            <CheckoutSteps step1 step2 step3 step4 />
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Address:</strong>
                                {cart.shippingAddress.address},
                                {cart.shippingAddress.city},
                                {cart.shippingAddress.postalCode},
                                {cart.shippingAddress.country},
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <strong>Method: </strong>
                            {cart.paymentMethod}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Order Items:</h2>
                            {cart.cartItems.length === 0 ? <Message>Your Cart is Empty</Message> : (
                                <ListGroup variant='flush'>
                                    {cart.cartItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={item.image} alt={item.name} fluid rounded />
                                                </Col>

                                                <Col>
                                                    {item.name}
                                                </Col>

                                                <Col md={4}>
                                                    {item.qty} x ${item.price} = ${item.qty * item.price}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}


                        </ListGroup.Item>

                    </ListGroup>
                </Col>

                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summery</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Itemd</Col>
                                    <Col>${cart.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>${cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>${cart.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>


                            <ListGroup.Item>
                                <Row>
                                    <Col>Total Price</Col>
                                    <Col>${cart.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button type='button' className='btn-block' diasbled={cart.cartItems === 0} onClick={placeOrderHandler} >Place Order</Button>
                            </ListGroup.Item>


                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )

}

export default PlaceOrderScreen