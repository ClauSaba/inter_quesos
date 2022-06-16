import "./Carrito.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping ,faCircleUser} from "@fortawesome/free-solid-svg-icons";


function Carrito(){
return(
  <div id="Carrito">
    <button className="botonesCarrito"><FontAwesomeIcon icon={faCircleUser} /></button>
		<button className="botonesCarrito"><FontAwesomeIcon icon={faCartShopping} /></button>
  </div>
    );
  }
  
  export default Carrito;