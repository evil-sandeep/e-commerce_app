import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../component/FormContainer';
import { saveShippingAddress  } from '../actions/cartAction';

const ShippingScreen = () => {

  const cart=useSelector(state=>state.cart)
  const {shippingAddress}=cart

 

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const navigate = useNavigate();
  const dispatch=useDispatch();

  const submitHandler=(e)=>{
    e.preventDefault()
    dispatch(saveShippingAddress({address,city,postalCode,country}))
    // console.log('Submit')
    navigate('/payment')

  }

  return (
    <FormContainer>
      <h1>Shipping</h1>
      <form onSubmit={submitHandler}>

        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control type='text ' required placeholder='Enter your Address' value={address} onChange={(e) => setAddress(e.target.value)} />
        </Form.Group>


        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control type='text ' required placeholder='Enter your City' value={city} onChange={(e) => setCity(e.target.value)} />
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label>PostalCode</Form.Label>
          <Form.Control type='text ' required placeholder='Enter your PostalCode' value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control type='text ' required placeholder='Enter your Country' value={country} onChange={(e) => setCountry(e.target.value)} />
        </Form.Group>
        <br/>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </form>
    </FormContainer>
  );
}

export default ShippingScreen;
