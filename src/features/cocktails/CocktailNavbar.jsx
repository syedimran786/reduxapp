import React from 'react'
import { Link } from 'react-router-dom'
import './CocktailNavbar.scss'

function CocktailNavbar() {
  return (
   <nav>
    <Link to="/">
        Home
    </Link>
    <Link to="/cocktails">
        Cocktails
    </Link>
   </nav>
  )
}

export default CocktailNavbar