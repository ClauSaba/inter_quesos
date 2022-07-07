import {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons"
import {faCircleMinus} from "@fortawesome/free-solid-svg-icons"
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"
import swal from 'sweetalert';
import "./ItemDetail.css"


const ItemDetail = ({itemDetail, initial, onAdd}) => {
	const {nombre, precio, stock, foto, origen, bandera, descripcion, tipo} = itemDetail ;

   const [cantidad, setCantidad] = useState(initial);

	const btnCantidadSuma = (valor) => {
		setCantidad(cantidad + valor)
			cantidad === stock && swal({
				title: 'No hay mas stock disponible',
				text: `actualmente hay ${stock} unidades de ${nombre}`,
				icon: 'error',
				timer: 2000,
				timerProgressBar: true,
			});	
	}

	
	const btnCantidadResta = (valor) => {
		setCantidad(cantidad + valor)
	}

	const btnAgregaCantidad = () => {
		onAdd(cantidad, nombre)
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
				<div className='cantidadAgregarDetail'>
					<span className='btnResta' onClick={()=>btnCantidadResta(cantidad===1 ? 0 : -1)}><FontAwesomeIcon icon={faCircleMinus} /></span>
					<label className='muestraCantidadDetail'>{cantidad}</label>
					<span className='btnSuma' onClick={()=>btnCantidadSuma((cantidad===stock ? 0 : +1))}><FontAwesomeIcon icon={faCirclePlus} /></span>
					<span className='btnAgrega' onClick={()=>btnAgregaCantidad()}><FontAwesomeIcon icon={faCartPlus} /> </span>
				</div>
					
				</div>
    </div>
  )
}

export default ItemDetail