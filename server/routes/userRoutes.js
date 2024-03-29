import express from 'express'; // create API routes.
const router = express.Router();//used to define and organize routes.
import { authUser, getUserProfile, registerUser, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser)
router.post('/login', authUser);
router.route('/profile')
      .get(protect, getUserProfile)
      .put(protect, updateUserProfile);



export default router;
