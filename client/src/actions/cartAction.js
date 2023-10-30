
import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

// The addToCart function takes in three parameters: id, qty, and size.
// The id parameter is the product ID.
// The qty parameter is the quantity.
export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

dispatch({
type:CART_ADD_ITEM,
payload:{
    product:data._id,
    name:data.name,
    image:data.image,
    price:data.price,
    countInStock:data.countInStock,
    qty,
},
})

// The getState function returns the state object.
// The state.cart.cartItems array is saved to the localStorage object.
localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}
