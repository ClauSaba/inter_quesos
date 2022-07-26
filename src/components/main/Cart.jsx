import "./Cart.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const {products,deleteProduct, clear} = useContext(CartContext)

  return ( products.length === 0 ?

    <div className='cart'> todavia no tienes nada en el carrito, puedes clickear <Link to = {"/"} className= "blanco"> aquí </Link> para ver el listado de nuestros productos</div>
    :
    <>
    <div >
      {products.map((item)=>{
        return(
          <div className="itemCarrito" key={item.codigo}>
          <Link to= {`/detalle/${item.codigo}`}><img className="cartFoto" src={item.foto} alt={item.nombre} /> </Link>
          <p className="cartNombre"> {item.nombre} </p>
          <p className="cartPrecio"> $ {item.precio} </p>
			    <p className="cartCantidad"> cant: {item.cantidad} </p>
          <p className="cartTotal"> subTotal: $ {item.precio * item.cantidad} </p>
          <button onClick={()=>deleteProduct(item.codigo)} className="cartEliminar"><FontAwesomeIcon icon={faTrash} /></button>
          </div>
        )
      })}
    </div>

    <div className="finalizaCompra">
      <h2 className="mensajeTotal"> El total de tu compra es $ {products.reduce((acc, item) => acc + item.precio * item.cantidad ,0) } </h2>
      <Link to = {"/CartFinalizar"} className="btnPagar">Finalizar</Link>
      <button className="btnVaciar"  onClick={()=>clear()}>Vaciar</button>
    </div>  
  </>
  )
}
export default Cart;

