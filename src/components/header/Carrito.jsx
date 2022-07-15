import "./Carrito.css"
import { useContext } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';


const Carrito = () =>{
  const {cantidad} = useContext(CartContext)

return(
  <div id="Carrito"> 
		<Link to= "/cart"><button className="botonesCarrito"><FontAwesomeIcon icon={faCartShopping} />  </button>
    </Link>
    <span className="itemEnCarrito">{cantidad === 0 ? "": cantidad}</span>
  </div>
    );
  }
  
  export default Carrito;