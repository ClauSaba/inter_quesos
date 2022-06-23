import './App.css';
import LogoBrand from './components/header/LogoBrand';
import NavBar from './components/header/NavBar';
import Carrito from './components/header/Carrito';
import ItemListContainer from './components/main/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <LogoBrand/>
        <NavBar/>
        <Carrito/>
      </header>
      <main className='AppMain'>
        <ItemListContainer greeting="Bienvenidos a La Europea"  />   

      </main>
      <footer className='AppFooter'>

      </footer>
    </div>
  );
}

export default App;


