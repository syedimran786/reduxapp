import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyIce,stockIce } from './iceCream'

function IceCreamView() {

    let ice=useSelector(state=>state.ice.totalIce)
    let dispatch=useDispatch();
  return (
    <div>
        <h1>Total ICE : {ice}</h1>
        <button onClick={()=>(dispatch(buyIce()))}>Buy Ice</button>
        <button onClick={()=>(dispatch(stockIce(2)))}>Stock Ice</button>

    </div>
  )
}

export default IceCreamView