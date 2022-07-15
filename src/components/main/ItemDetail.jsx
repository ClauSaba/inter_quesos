import "./ItemDetail.css"
import ItemsCount from './ItemsCount';
import	swal	from "sweetalert"
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';


const ItemDetail = ({product}) => {
	const {nombre, precio, stock, foto, origen, bandera, descripcion, tipo} = product ;

	const {addProduct } = useContext(CartContext)

  const onAdd = (cantidad, nombre) =>{
    swal({
			text: `Se agregaron  ${cantidad} unidades de ${nombre} al carrito`,
			icon: 'success',
			timer: 2000,
		  timerProgressBar: true
		});		
    const productoConCantidad = {...product, cantidad: cantidad}

    addProduct(productoConCantidad);
  }

  	return (
    	<div className='detalleProducto '>
			<div className="detalleProductoIzq">
				<div className="banderaEncabezado">
					<img className='banderaDetail' src={bandera} alt={origen} />
					<h6 className="origenBandera"> {origen} </h6>
				</div>
				<img className='imagenProducto' src={foto} alt={nombre} />	
			<h2 className="precioProducto"> $ {precio}</h2> 			
		</div>
			<div className="detalleProductoDerecha">
				<h2 className="nombreProducto"> {nombre}</h2>
				<p className='descripcion'>{descripcion}</p>
				<ul className='liOrigenTipo'>
						<li className="origenTipo">Tipo: {tipo} </li>
						<li className="origenTipo">Origen: {origen} </li>
					</ul>
				<h5 className="tituloAgregarCarrito">Agregá al carrito :  </h5>
				<ItemsCount  initial= {1} onAdd={onAdd} product= {product} stock = {stock} nombre ={nombre}></ItemsCount>
				</div>
    </div>
  )
}

export default ItemDetail