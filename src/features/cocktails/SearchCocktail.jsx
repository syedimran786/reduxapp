import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { searchNewCocktail } from './cocktailSlice';


function SearchCocktail() {

    let dispatch=useDispatch();
    let newCocktail=useRef()

    let changeCocktail=()=>
    {
        dispatch(searchNewCocktail(newCocktail.current.value))
    }
  return (
    <div>
        <form>
            <input type="text" ref={newCocktail} onChange={changeCocktail} />
        </form>
    </div>
  )
}

export default SearchCocktail