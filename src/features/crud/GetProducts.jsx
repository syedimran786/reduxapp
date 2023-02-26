import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProductsFilter from './ProductsFilter'
import { deleteProduct, getAllProducts } from './productsSlice'
import "./styles/GetProducts.scss"
function GetProducts() {

  let dispatch = useDispatch();
  let navigate=useNavigate()
  let {products,loading} = useSelector(store => {
    return store.product
  })

  // console.log(products);

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  let deleteMyProduct=(id)=>
  {
    let approve=window.confirm("Do you want to delete product")
    if(approve)
    {
      dispatch(deleteProduct(id))
      dispatch(getAllProducts())
      alert("Product Deleted Successfully")
    }
   
  }

  let updatMyProduct=(id)=>
  {
    
    navigate(`/updateProducts/${id}`)
  }
  // console.log(products);

  if(loading)
  {

    return <h1>Loading.....</h1>
  }
  return (
    <div>
      {/* <ProductsFilter /> */}
      {products?.length===0? 
            <h1>No Prodcuts Available Please Add Some Products</h1>:
            <table>
            <thead>
              <tr>
                <th>SL NO</th>
                <th>Title</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              
              {products?.map((product, i) => {
                return <tr key={product.id}>
                  <td>{i + 1}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>
                    <button onClick={()=>(deleteMyProduct(product.id))}>Delete</button>
                    <button onClick={()=>(updatMyProduct(product.id))}>Edit</button>
    
                  </td>
                </tr>
              })}
            </tbody>
          </table>
         }
      
    </div>
  )
}

export default GetProducts