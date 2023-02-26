import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { cartItems } from "./cartItems";


let initialState = {
    carts: cartItems,
    totalAmount: 0,
    totalItems: 0
}

let cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        clearCart: (state, action) => {
            state.carts = []
        },
        displayItems: (state, action) => {
            state.carts = []
        },
        removeItem: (state, action) => {
            let newCart = state.carts.filter((cart) => {
                return cart.id !== action.payload
            })

            state.carts = newCart
        },
        increaseItem: (state, action) => {
            let newCart = state.carts.map((cart) => {
                if (cart.id === action.payload) {
                    return { ...cart, amount: cart.amount + 1 }
                }
                return cart
            });
            state.carts = newCart
        },
        decreaseItem: (state, action) => {
            //! using map
            let newCart = state.carts.map((cart) => {
                if (cart.id === action.payload) {
                    return { ...cart, amount: cart.amount - 1 }
                }
                return cart
            }).filter((cart) => cart.amount !== 0);
            state.carts = newCart
        
        },
        getTotals: (state, action) => {
          let gettotal=state.carts.reduce((cartTotal,cartItem)=>
          {
            let {price,amount}=cartItem;

            let itemTotal=price*amount;
            cartTotal.totalAmount+=itemTotal;
            cartTotal.totalItems+=amount;
            console.log(cartTotal);
            return cartTotal
          },
          {
            totalAmount:0,
            totalItems:0
          });

          let {totalAmount,totalItems}=gettotal;
          state.totalAmount=totalAmount;
          state.totalItems=totalItems
        }
    }
})

export default cartSlice.reducer;
export let { clearCart, removeItem, increaseItem, decreaseItem, getTotals } = cartSlice.actions