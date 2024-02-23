import express from 'express'; // create API routes.
const router = express.Router();//used to define and organize routes.
import { addOrderItems, getOrderById } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';


router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)


export default router;
