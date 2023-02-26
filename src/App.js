import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import IceCreamView from './features/ice/IceCreamView';
import CakeSliceView from './features/cake/CakeSliceView';
import UserSliceView from './features/users/UserSliceView';
import CartView from './features/cart/CartView';
import CartItems from './features/cart/CartItems.jsx';
import Navbar from './features/cart/Navbar';
import CocktailNavbar from './features/cocktails/CocktailNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './features/cocktails/Home';
import CocktailDetails from './features/cocktails/CocktailDetails';
import Cocktails from './features/cocktails/Cocktails';
import AllCocktails from './features/cocktails/AllCocktails';

import CrudNavbar from './features/crud/Navbar';

import AddProducts from "./features/crud/AddProducts"
import UpdateProducts from "./features/crud/UpdateProducts"
import GetProducts from "./features/crud/GetProducts"
import GetProductsById from "./features/crud/GetProductsById"

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <CartItems/>
//     </div>
//   );
// }

//! cocktail
// function App() {
//   return (
   
//       <BrowserRouter>
//       <CocktailNavbar/>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='cocktails' element={<AllCocktails/>}/>
//           <Route path='cocktailDetails/:id' element={<CocktailDetails/>}/>
//         </Routes>
//       </BrowserRouter>
      
      
//   );
// }

// export default App;

//! crud
function App() {
  return (
   
      <BrowserRouter>
      <CrudNavbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='addProducts' element={<AddProducts/>}/>
          <Route path='updateProducts/:id' element={<UpdateProducts/>}/>
          <Route path='getProducts' element={<GetProducts/>}/>
          <Route path='getProductsById/:id' element={<GetProductsById/>}/>
          
        </Routes>
      </BrowserRouter>
      
      
  );
}

export default App;
