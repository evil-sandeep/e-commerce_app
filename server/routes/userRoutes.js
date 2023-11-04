import express from 'express'; // create API routes.
const router = express.Router();//used to define and organize routes.
// import {
//     authUser,
// } from '../controllers/userController';

import { authUser } from '../controllers/userController.js';




router.post('/login', authUser);

export default router;
