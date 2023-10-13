import React, {useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../component/Rating'
import axios from 'axios' 




const ProductScreen = () => {
  const {id}=useParams();

  const[product, setProduct]=useState({})

  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const { data } = await axios.get(`/api/products/${id}`)
        setProduct(data);
    }catch(error){
      console.error('Error to fatching Products',error);
    }
  };

    
    fetchProducts();
}, [id]);
 



  return (
    <>

      {/* Render the back button */}
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>

      {/* Render the product details */}
      {/* <h1>{product.name}</h1>
      <h3>{product.price}</h3>
      <h3>{product.brand}</h3>
      <h3>{product.rating}</h3> */}

      {/* Render the product image */}
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

              <ListGroup.Item>
                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen