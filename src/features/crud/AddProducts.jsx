import React, { useState } from 'react'
import { addProduct } from './productsSlice';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AddProducts() {

  let [newProduct, setnewProduct] = useState({id:"",title:"",price:""});
  
let dispatch=useDispatch()
let navigate=useNavigate()



  let changeProduct = ({ target: { value,name } }) => {
    
    setnewProduct({...newProduct,[name]:value})
  }

  let addNewProduct = (e) => {
    dispatch(addProduct({...newProduct,id:uuidv4()}));
    navigate("/getProducts")
    e.preventDefault()
}
return (
   <>
   <h1>Add Products</h1>
     <form onSubmit={addNewProduct}>
        <div>
            <input type="text" name='title' placeholder='Product Name' value={newProduct.title} onChange={changeProduct} />
        </div>
        <div>
            <input type="text" name='price' placeholder='Price' value={newProduct.price} onChange={changeProduct} />
            
        </div>
        <div>
            <button type='submit'>Add</button>
        </div>
    </form>
   </>
)
}

export default AddProducts