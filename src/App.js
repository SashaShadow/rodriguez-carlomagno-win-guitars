import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import Contact from "./components/Contact/Contact.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="¡Bienvenido a WinGuitars!"/>}/>
          <Route path='/category/' element={<ItemListContainer greeting="¡Bienvenido a WinGuitars!"/>}/>
          <Route path='/category/:category' element={<ItemListContainer greeting="¡Bienvenido a WinGuitars!"/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer greeting="¡Mirá nuestros productos!"/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
    </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
