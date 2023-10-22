// Desc: Redux store for the application
import { createStore, combineReducers, applyMiddleware } 
from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// import {productListReducer,productDetailsReducer} from './reducers/productReducers';

const reducer = combineReducers({}) //replace this empty object with actual reducer functions.
const initialState = {};// provide default values for  application's initial state if needed.
const middleware = [thunk];//allows  to write asynchronous actions in Redux.

const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
 
export default store;
