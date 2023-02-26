import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {

    let {totalItems}=useSelector(state=>
        {
            return state.cart
        })
  return (
    <nav style={{background:"pink",padding:"20px",textDecoration:"none"}}>
    <a href="">Home</a>
    <a href="" style={{marginLeft:"500px",textDecoration:"none",fontSize:"40px"}}>
        Cart<sup style={{fontSize:"20px"}}>{totalItems}</sup> </a>
</nav>
  )
}

export default Navbar