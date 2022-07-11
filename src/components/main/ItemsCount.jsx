import {useState} from 'react'
import	swal	from "sweetalert"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons"
import {faCircleMinus} from "@fortawesome/free-solid-svg-icons"
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';
import Cart from './Cart';

const ItemsCount = ( { nombre, onAdd, initial, stock } ) => {
	const [cantidad, setCantidad] = useState(initial);

	const [btn, setBtn] = useState(false);

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
		onAdd(cantidad, nombre);
		setBtn(true)
	}

	return(
		btn ? <Link to={"/cart"} element= {<Cart/> } > <button className='btnFinalizar'> Finalizar </button>  </Link> :
		<div className='cantidadAgregarDetail'>
			<span className='btnResta' onClick={()=>btnCantidadResta(cantidad===1 ? 0 : -1)}><FontAwesomeIcon icon={faCircleMinus} /></span>
			<label className='muestraCantidadDetail'>{cantidad}</label>
			<span className='btnSuma' onClick={()=>btnCantidadSuma((cantidad===stock ? 0 : +1))}><FontAwesomeIcon icon={faCirclePlus} /></span>
			<span className='btnAgrega' onClick={()=>btnAgregaCantidad()}><FontAwesomeIcon icon={faCartPlus} /> </span>
		</div> 
		
		
	)
	
}

export default ItemsCount