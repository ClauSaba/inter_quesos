import React, {useState} from 'react'
import ItemsCount from './ItemsCount';
import swal from 'sweetalert';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons"
import {faCircleMinus} from "@fortawesome/free-solid-svg-icons"
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"


<ItemsCount />
const Item = ( {item} ) => {
	const {codigo, nombre, precio, stock, foto, origen, bandera} = item ;

	const [cantidad, setCantidad] = useState(1);

	const btnCantidadSuma = (valor) => {
		setCantidad(cantidad + valor)
			cantidad == stock && swal({
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
	
  return (
    <div className="Cartas" key={codigo}>
      <img className="FotoProducto" src={foto} alt= {nombre} />    
      <p className="nombrePrecio"> {nombre} - ${precio} </p>
      <div className='cantidadAgregar'>
        <button className='btnResta' onClick={()=>btnCantidadResta(cantidad==1 ? 0 : -1)}><FontAwesomeIcon icon={faCircleMinus} /></button>
        <span className='muestraCantidad'>{cantidad}</span>
        <button className='btnSuma' onClick={()=>btnCantidadSuma((cantidad==stock ? 0 : +1))}><FontAwesomeIcon icon={faCirclePlus} /></button>
        <button className='btnAgrega'><FontAwesomeIcon icon={faCartPlus} /> </button>
			</div>
			<h6 className="banderas"><img src={bandera} alt={origen} className="imagenBandera" />  {origen}  <img src={bandera} alt={origen} className="imagenBandera" /></h6>
    </div>
  )
}

export default Item