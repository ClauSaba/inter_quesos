import React, {useState} from 'react'
import ItemsCount from './ItemsCount';
import swal from 'sweetalert';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons"
import {faCircleMinus} from "@fortawesome/free-solid-svg-icons"
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"
import "./Item.css"
import { Link } from 'react-router-dom';

<ItemsCount />
const Item = ( {item, onAdd, initial} ) => {
	const {codigo, nombre, precio, stock, foto, origen, bandera} = item ;

	const [cantidad, setCantidad] = useState(initial);

	const btnCantidadSuma = (valor) => {
		setCantidad(cantidad + valor)
			cantidad === stock && swal({
				title: 'No hay mas stock disponible',
				text: `actualmente hay ${stock} unidades`,
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
    <div className="Cartas" key={codigo}  >
      <Link to={`/detalle/${codigo}`}><img className="FotoProducto" src={foto} alt= {nombre} /></Link>      
      <p className="nombrePrecio"> {nombre} - ${precio} </p>
      <div className='cantidadAgregar'>
        <span className='btnResta' onClick={()=>btnCantidadResta(cantidad===1 ? 0 : -1)}><FontAwesomeIcon icon={faCircleMinus} /></span>
        <label className='muestraCantidad'>{cantidad}</label>
        <span className='btnSuma' onClick={()=>btnCantidadSuma((cantidad===stock ? 0 : +1))}><FontAwesomeIcon icon={faCirclePlus} /></span>
        <span className='btnAgrega' onClick={()=>btnAgregaCantidad()}><FontAwesomeIcon icon={faCartPlus} /> </span>
	    </div>
			<h6 className="banderas"><img src={bandera} alt={origen} className="imagenBandera"   />  {origen}  <img src={bandera} alt={origen} className="imagenBandera" /></h6>
    </div>
  )
}

export default Item