import ItemsCount from './ItemsCount';
import "./Item.css"
import { Link } from 'react-router-dom';
import	swal	from "sweetalert"
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';


const Item = ( {product } ) => {
	const {codigo, nombre, precio, stock, foto, origen, bandera, cantidad} = product ;

  const {addProduct } = useContext(CartContext)

  const onAdd = (cantidad, nombre) =>{
    swal({
			text: `Se agregaron  ${cantidad} unidades de ${nombre} al carrito`,
			icon: 'success',
			timer: 2000,
		  timerProgressBar: true
		});		
    const productoConCantidad = {...product, cantidad: cantidad}

    addProduct(productoConCantidad)
  }

  return (
    <div className="Cartas" key={codigo}  >
      <Link to={`/detalle/${codigo}`}><img className="FotoProducto" src={foto} alt= {nombre} /></Link>      
      <p className="nombrePrecio"> {nombre} - ${precio} </p>
      <div className='cantidadAgregar'>
	      <ItemsCount  initial= {1} onAdd= {onAdd}  product= {product} stock = {stock} nombre ={nombre} cantidad ={cantidad} codigo={codigo}></ItemsCount>
			</div>
	    <h6 className="banderas"><img src={bandera} alt={origen} className="imagenBandera"   />  {origen}  <img src={bandera} alt={origen} className="imagenBandera" /></h6>
		</div>	
  )
}

export default Item