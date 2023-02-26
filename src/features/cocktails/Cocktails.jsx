import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCocktails } from './cocktailSlice'
import Coktail from './Coktail'

import { Audio } from 'react-loader-spinner'

function Cocktails() {

    let dispatch=useDispatch()
    let {cocktailList:{drinks},loading,searchCocktail}=useSelector(store=>
        {
            return store.cocktail
        })

        useEffect(()=>
        {
            dispatch(fetchCocktails())
          
        },[searchCocktail])

        if(loading)
        {
            return <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClassName
            
          />
        }

  return (
    <div>

      
    
        <hr />
        {drinks?.map(drink=>
            {
                return <Coktail key={drink.idDrink} {...drink}/>
            })}
    </div>
  )
}

export default Cocktails