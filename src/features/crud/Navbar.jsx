import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/Navbar.scss"

function Navbar() {
  return (
    <nav>
    <Link to="/">Home</Link>
    <Link to="/addProducts">Add Products</Link>
    <Link to="/getProducts">All Products</Link>


    
</nav>
  )
}

export default Navbar