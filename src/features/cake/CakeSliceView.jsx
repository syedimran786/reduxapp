import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake,stockCake } from './cakeSlice'

function CakeSliceView() {

    let cake=useSelector(state=>state.cake.totalCakes);
    let dispatch=useDispatch();
  return (
    <div>
        <h1>Totla Cakes : {cake}</h1>
        <button onClick={()=>(dispatch(buyCake()))}>Buy Cake</button>
        <button onClick={()=>(dispatch(stockCake(5)))}>Stock Cake</button>

    </div>
  )
}

export default CakeSliceView