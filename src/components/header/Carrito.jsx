import "./Carrito.css"
import { useContext } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";


const Carrito = () =>{
  const {cantidad} = useContext(CartContext)

return(
  <div id="Carrito">
		<button className="botonesCarrito"><FontAwesomeIcon icon={faCartShopping} />  </button>
    <span className="itemEnCarrito">{cantidad}</span>
  </div>
    );
  }
  
  export default Carrito;