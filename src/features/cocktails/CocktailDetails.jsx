// import React from 'react'
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom'

// import { useDispatch } from "react-redux";
// import { fetchCocktailbyId, updateCocktailId } from "./cocktailSlice";

// function CocktailDetails() {
//     let {id}=useParams();
//     let {cocktailList:{drinks},loading}=useSelector(store=>
//         {
//             return store.cocktail
//         })
//         console.log( id, drinks);

//         let mydrinks=drinks?.filter(d=>
//             {

//                 return d.idDrink===id
//             })
// console.log(mydrinks);
//             let [drink]=mydrinks
//             let {strDrink,idDrink,strTagsstrCategory,strAlcoholic,strGlass,strInstructions,strDrinkThumb}=drink;

//   return (
//     <div className='border border-success'>
//         <h1>{idDrink} {strDrink}</h1>
//         <img src={strDrinkThumb} alt="" height={300} width={300} className="img-flud" />
//         <h3>{strTagsstrCategory} {strAlcoholic} {strGlass}</h3>
//         <p className='lead'>{strInstructions}</p>
//     </div>
//   )
// }

// export default CocktailDetails



//! usnig api
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { fetchCocktailbyId, updateCocktailId } from "./cocktailSlice"
import { Watch } from 'react-loader-spinner'
import Skeleton from 'react-loading-skeleton'


function CocktailDetails() {
    let { id } = useParams();
    let { singlecocktail: { drinks }, loading } = useSelector(store => {
        return store.cocktail
    })

    let dispatch = useDispatch()
   

    useEffect(() => {
        dispatch(updateCocktailId(id))
        dispatch(fetchCocktailbyId())

    }, [id])

    console.log(drinks);

    // let {strDrink,idDrink,strTagsstrCategory,strAlcoholic,strGlass,strInstructions,strDrinkThumb}=drinks[0];
    if(loading)
    {
        return <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    }
    return (
        <div className='border border-success'>

            {drinks===undefined?<Skeleton />:(drinks?.map(({strDrink,idDrink,strTagsstrCategory,strAlcoholic,strGlass,strInstructions,strDrinkThumb})=>
            {
                return <div key={idDrink}>
                <h1>{idDrink} {strDrink}</h1>
            <img src={strDrinkThumb} alt="" height={300} width={300} className="img-fluid" />
            <h3>{strTagsstrCategory} {strAlcoholic} {strGlass}</h3>
            <p className='lead'>{strInstructions}</p>
                </div>
            }))}
            
        </div>
    )
}

export default CocktailDetails