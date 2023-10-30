/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react'
import { Link, useParams  } from 'react-router-dom'
import { useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../component/Rating'
import { listProductsDetails } from '../actions/productActions'
import Loader from '../component/Loader'
import Message from '../component/Message'


const ProductScreen = () => {
  const { id } = useParams();  //Access the 'id' parameter from the URL
  const navigate = useNavigate ();



  const [qty, setQty] = useState(1);

  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {

    dispatch(listProductsDetails(id));
  }, [dispatch,  id]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  }

  return (
    <>

      {/* Render the back button */}
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>

          {/* Render the product description */}
          <Col md={3}>
            <ListGroup variant='flush'>

              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
            </ListGroup>

            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>

            <ListGroup.Item>
              Price: ${product.price}
              <Link to={`/product/${product._id}`}>Product Details</Link>
            </ListGroup.Item>

            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      Price:
                    </Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>
                      Status:
                    </Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                          {
                            [...Array(product.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1} >{x + 1}</option>
                            ))}

                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className='btn-block' type='button' disabled={product.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}


      {/* Render the product details */}
      {/* <h1>{product.name}</h1>
      <h3>{product.price}</h3>
      <h3>{product.brand}</h3>
      <h3>{product.rating}</h3> */}

      {/* Render the product image */}

    </>
  )
}

export default ProductScreen
