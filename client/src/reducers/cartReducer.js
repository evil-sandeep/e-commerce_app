
import { CART_ADD_ITEM } from "../constants/cartConstants";

// The cartReducer function takes in two parameters: state and action.
// The state parameter is set to an empty object.
// The action parameter is set to the action object.
// The state parameter is set to an empty object.
// The action parameter is set to the action object.
// The switch statement checks the action.type property.
// If the action.type property is set to CART_ADD_ITEM, then the state is returned as an object.
// The object contains the state and the payload.
// The payload is the data that is returned from the action object.
// The payload contains the product, the quantity, and the size.
// The payload is added to the state.cartItems array.
// If the action.type property is set to CART_REMOVE_ITEM, then the state is returned as an object.
// The object contains the state and the payload.
// The payload is the data that is returned from the action object.
// The payload contains the product ID.
// The payload is removed from the state.cartItems array.
// If the action.type property is set to CART_SAVE_SHIPPING_ADDRESS, then the state is returned as an object.
// The object contains the state and the payload.
// The payload is the data that is returned from the action object.
// The payload contains the shipping address.
// The shipping address is added to the state.shippingAddress object.
// If the action.type property is set to CART_SAVE_PAYMENT_METHOD, then the state is returned as an object.
// The object contains the state and the payload.
// The payload is the data that is returned from the action object.
// The payload contains the payment method.
// The payment method is added to the state.paymentMethod object.
// If the action.type property is set to CART_CLEAR_ITEMS, then the state is returned as an object.




  export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload

            // The product property is set to the item property.
            const existsItem = state.cartItems.find(x => x.product === item.product)

            if (existsItem) {

                // The state.cartItems array is mapped.
                // The item.product property is compared to the x.product property.
                // If the item.product property is equal to the x.product property, then the item is returned.
                // If the item.product property is not equal to the x.product property, then the x is returned.
                // The item is added to the state.cartItems array.
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existsItem.product ? item : x),
                }
            }
            else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,item]
                }
            }

        default:
            return state
    }
}


