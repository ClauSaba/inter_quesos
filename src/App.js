import './App.css';
import LogoBrand from './components/header/LogoBrand';
import NavBar from './components/header/NavBar';
import Carrito from './components/header/Carrito';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
// import Slider from "./components/Slider";
// import {SliderData} from "../src/components/mocks/Carrousel"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Footer from './components/footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="AppHeader">
          <LogoBrand/>
          <NavBar/>
          <Carrito/>
        </header>
        <main className='AppMain'>
        <Routes>
          
            <Route path='/' element= {<ItemListContainer greeting="Bienvenidos a La Europea fromagerie"  /> }/>
            {/* {<Slider SliderData= {SliderData} />} */}
            <Route path='/category/:tipo' element= {<ItemListContainer seleccion="Aqui está tu selección: " /> }/>
            <Route path='/detalle/:codigo' element= {<ItemDetailContainer seleccion="Aqui está tu selección: " /> }/>
            
        </Routes>
        </main>
        <footer className='AppFooter'>
        <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;


