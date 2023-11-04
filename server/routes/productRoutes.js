import express from 'express'; // create API routes.
const router = express.Router();//used to define and organize routes.
import {getProducts, getProductById } from '../controllers/productController.js'



//desc  fetch all products
//route get/api/products
//access public
 
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router;
