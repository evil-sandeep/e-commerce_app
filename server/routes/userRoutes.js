import express from 'express'; // create API routes.
const router = express.Router();//used to define and organize routes.
import { authUser,getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/login', authUser);
router.route('/profile').get(protect,getUserProfile);

export default router;
