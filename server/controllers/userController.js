import asyncHandler from 'express-async-handler';//middleware for handling asynchronous functions with Express.
import User from '../models/userModel.js';
import generateToken from '../utils/generateTokens.js';

//desc  Auth user and get a token
//route Post/api/user/login
//access public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })

    }
    else {
        res.status(401)
        throw new Error('Invalid Email Or Password')
    }
})

export { authUser }    