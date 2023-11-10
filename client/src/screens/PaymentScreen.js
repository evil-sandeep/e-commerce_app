import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../component/FormContainer';
import { savePaymentMethod } from '../actions/cartAction';
import CheckoutSteps from '../component/CheckoutSteps';

const PaymentScreen = () => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    const navigate = useNavigate();

    if (!shippingAddress) {
        navigate('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal ')

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        // console.log('Submit')
        navigate('/placeorder')

    }

    return (

        <FormContainer>
            <CheckoutSteps step1 step2 step3 />
            <h1>Payment Method💰</h1>
            <form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'> Select Method</Form.Label>
                    <Col>
                        
                        <Form.Check
                            type='radio'
                            label='PayPal Or Credit Card'
                            id='PayPal'
                            name='paymentMethod'
                            value='PayPal'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />


                        <Form.Check
                            type='radio'
                            label='Stripe'
                            id='Stripe'
                            name='paymentMethod'
                            value='Stripe'
                          
                            onChange={(e) => setPaymentMethod(e.target.value)}>
                        </Form.Check>

                        <Form.Check
                            type='radio'
                            label='Cash On Delivery'
                            id='cashyOnDelivery'
                            name='paymentMethod'
                            value='Cash On Delivery'
                            
                            onChange={(e) => setPaymentMethod(e.target.value)}>
                        </Form.Check>

                    </Col>
                </Form.Group>

                <br />
                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </form>
        </FormContainer>
    );
}

export default PaymentScreen;
