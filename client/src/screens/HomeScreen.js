import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../component/Product'
import { listProducts } from '../actions/productActions'
import Loader from '../component/Loader'
import Message from '../component/Message'



const HomeScreen = () => {
    const dispatch = useDispatch();                         //access the redux store
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList;

    useEffect(() => {                                //Fetch Products with Redux Action
        dispatch(listProducts())
    }, [dispatch])


    //Render Products Based on Redux State
    return (
        <>
            <h1>Latest Products</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                        <Product product={product} />
                    </Col>
                ))}
            </Row>}
        </>
    )
}

export default HomeScreen
