import './App.css';
import React from 'react';
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import Contact from "./components/Contact/Contact.js";
import Us from "./components/Us/Us.js";
import Cart from "./components/Cart/Cart.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartContext} from "./context/CartContext.js";
import {NotiProvider} from "./services/Notification/Notification.js";

function App() {
  
  return (
    <NotiProvider>
    <BrowserRouter>
      <CartContext>
      <div className='App'>
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="¡Bienvenido a WinGuitars!"/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/category/:category' element={<ItemListContainer greeting="¡Bienvenido a WinGuitars!"/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer greeting="¡Mirá nuestros productos!"/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/us" element={<Us/>}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
    </Routes>
    </div>
    </CartContext>
    </BrowserRouter>
    </NotiProvider>
  );
}

export default App;
