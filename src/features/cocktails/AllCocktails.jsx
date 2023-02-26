import React from 'react'
import Cocktails from './Cocktails'
import SearchCocktail from './SearchCocktail'

function AllCocktails() {
  return (
    <div>
        <SearchCocktail/>
        <Cocktails/>
    </div>
  )
}

export default AllCocktails