import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getTotals } from './cartSlice';
import CartView from './CartView';

function CartItems() {

    let {carts,totalAmount}=useSelector(state=>
        {
            return state.cart
        })

let dispatch=useDispatch()
   
useEffect(()=>
{
    console.log("useeffects");
    dispatch(getTotals())
},[carts])

        
        if(carts.length===0)
        {
            return <h1>Your cart is empty</h1>
        }
  return (
    <div>
        {carts.map((c,i)=>
        {
            return <CartView key={i} {...c}/>
        })}

        <h1>Total:{Math.round(totalAmount)}</h1>
        <button  onClick={()=>(dispatch(clearCart()))}>Clear Cart</button>
    </div>
  )
}

export default CartItems