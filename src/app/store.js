import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from '../features/counter/counterSlice';
import iceReducer from "../features/ice/iceCream"
import cakeReducer from "../features/cake/cakeSlice"
import userReducer from "../features/users/userSlice"
import cartReducer from "../features/cart/cartSlice"
import cocktailReducer from "../features/cocktails/cocktailSlice"
import productReducer from "../features/crud/productsSlice"





export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // ice:iceReducer,
    // cake:cakeReducer,
    // user:userReducer,
    // cart:cartReducer,
    // cocktail:cocktailReducer,
    product:productReducer
  },
  // middleware:[logger]
});
