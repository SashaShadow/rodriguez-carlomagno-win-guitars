import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  return (
    <div className='App'>
    <NavBar/>
    <ItemDetailContainer greeting="¡Mirá nuestros productos!"/>
    <ItemListContainer greeting="¡Bienvenido a WinGuitars!"/>
    </div>
    
  );
}

export default App;
