import './App.css';
import LogoBrand from './components/header/LogoBrand';
import NavBar from './components/header/NavBar';
import Carrito from './components/header/Carrito';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Footer from './components/footer/footer';
import Cart from "./components/main/Cart"
import CustomProvider from './context/CartContext';
import CartFinalizar from './components/main/CartFinalizar';

function App() {
  return (
    <BrowserRouter>
      <CustomProvider>
      <div className="App">
        <header className="AppHeader">
          <LogoBrand/>
          <NavBar/>
          <Carrito/>
        </header>
        <main className='AppMain'>
        <Routes>
            <Route path='/' element= {<ItemListContainer greeting="Bienvenidos a La Europea fromagerie"  /> }/>
            <Route path='/category/:tipo' element= {<ItemListContainer seleccion="Aqui está tu selección: " /> }/>
            <Route path='/detalle/:codigo' element= {<ItemDetailContainer seleccion="Aqui está tu selección: " /> }/>
            <Route path='/cart' element= {<Cart/> }/>
            <Route path='/CartFinalizar' element= {<CartFinalizar/> }/>
        </Routes>
        </main>
        <footer className='AppFooter'>
        <Footer />
        </footer>
      </div>
      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;


