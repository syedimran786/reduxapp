import React from 'react'
import { Link } from 'react-router-dom'

function Coktail({strDrink,idDrink}) {
  return (
    <ul>
        <li>
            <Link to={`/cocktailDetails/${idDrink}`}>
                {strDrink}
            </Link>
        </li>
    </ul>
  )
}

export default Coktail