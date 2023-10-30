// Desc: Redux store for the application
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailsReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

// import {productListReducer,productDetailsReducer} from './reducers/productReducers';


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})


const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = {
    cart: { cartItems: cartItemsFromStorage }
};// provide default values for  application's initial state if needed.
const middleware = [thunk];//allows  to write asynchronous actions in Redux.

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
