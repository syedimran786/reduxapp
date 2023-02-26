import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseItem, increaseItem, removeItem } from './cartSlice'

function CartView({amount,title,id,price}) {
    let dispatch=useDispatch()
  return (
    <div  style={{width:"350px",border:"2px solid red",textAlign:"center",margin:"20px",display:"inline-block"}}>
    <h1>{title}</h1>
    <h2>Price: {Math.round(price)*amount}</h2>
    <h3 style={{cursor:"pointer"}} onClick={()=>(dispatch(removeItem(id)))}>Remove</h3>
    <div>
    <button onClick={()=>(dispatch(increaseItem(id)))}>+</button>
    <span>{amount}</span>
    <button onClick={()=>(dispatch(decreaseItem(id)))}>-</button>
    </div>

</div>
  )
}

export default CartView