import asyncHandler from 'express-async-handler';//middleware for handling asynchronous functions with Express.
import Product from '../models/productModel.js';//Mongoose model representing products.


//desc  fetch all products
//route get/api/products
//access public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)

})


//desc  fetch single products
//route get/api/products/:id
//access public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    //  console.log(`Received a request to fetch product with ID: ${product}`);

    if (product) {
        console.log(`Product found: ${product.name}`);
        res.json(product)
    } else {
        console.log(`Product with ID ${product} not found`);
        res.status(404)
        throw new Error("Product not found")

    }

})

export { getProducts, getProductById }