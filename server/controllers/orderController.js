import asyncHandler from 'express-async-handler';//middleware for handling asynchronous functions with Express
import Order from '../models/orderModel.js';//Mongoose model representing order.


//desc  Create New Order
//route POST/api/order
//access Private
const addOrderItems = asyncHandler(async (req, res) => {
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body //Come From Body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No Order items');
        return
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id, //Come From Token
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })

        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
})

export { addOrderItems };
