import './App.css';
import LogoBrand from './components/header/LogoBrand';
import NavBar from './components/header/NavBar';
import Carrito from './components/header/Carrito';

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <LogoBrand/>
        <NavBar/>
        <Carrito/>
      </header>
    </div>
  );
}

export default App;


