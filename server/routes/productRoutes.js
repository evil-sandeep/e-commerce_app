import express from 'express'; // create API routes.
import asyncHandler from 'express-async-handler';//middleware for handling asynchronous functions with Express.
import Product from '../models/productModel.js';//Mongoose model representing products.
const router = express.Router();//used to define and organize routes.



//desc  fetch all products
//route get/api/products
//access public

router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})           //This route is typically used when you want to retrieve a list of 
                                                      // all available products.
    res.json(products)
}))

//desc  fetch single products
//route get/api/products/:id
//access public

router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404).json({ message: 'Product Not Found' })
    }

}))

export default router;
