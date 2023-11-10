import express from 'express'; // create API routes.
const router = express.Router();//used to define and organize routes.
import { addOrderItems } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';


router.route('/').post(protect,addOrderItems)


export default router;
