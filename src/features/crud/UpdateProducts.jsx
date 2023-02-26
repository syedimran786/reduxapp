import React, { useEffect, useState } from 'react'
import { addProduct, updateProduct } from './productsSlice';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateProducts() {
 
  let [newProduct, setnewProduct] = useState({title:"",price:""});
  
let dispatch=useDispatch()
let navigate=useNavigate()
let {id}=useParams()

let products = useSelector(store => {
  return store.product.products
})

let editableProduct=products.find((p)=>
{
  return p.id===id
})

useEffect(()=>
{
  setnewProduct({...newProduct,...editableProduct})
},[id])

  let changeProduct = ({ target: { value,name } }) => {
    
    setnewProduct({...newProduct,[name]:value})
  }

  let updateNewProduct = (e) => {
    dispatch(updateProduct({...newProduct,id}));
    navigate("/getProducts")
    e.preventDefault()
}

console.log(newProduct,id);
return (
  <>
    <h1>Edit Products</h1>
    <form onSubmit={updateNewProduct}>
        <div>
            <input type="text" name='title' placeholder='Product Name' value={newProduct.title} onChange={changeProduct} />
        </div>
        <div>
            <input type="text" name='price' placeholder='Price' value={newProduct.price} onChange={changeProduct} />
            
        </div>
        <div>
            <button type='submit'>Update</button>
        </div>
    </form>
  </>
)
}

export default UpdateProducts