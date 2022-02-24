import './App.css';
import React, { useState, useContext } from 'react';
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import Contact from "./components/Contact/Contact.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartContext} from "./context/CartContext.js";


function App() {
  
  return (
    <BrowserRouter>
      <CartContext>
      <div className='App'>
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="¡Bienvenido a WinGuitars!"/>}/>
          <Route path='/category/:category' element={<ItemListContainer greeting="¡Bienvenido a WinGuitars!"/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer greeting="¡Mirá nuestros productos!"/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
    </Routes>
    </div>
    </CartContext>
    </BrowserRouter>
    
  );
}

export default App;
