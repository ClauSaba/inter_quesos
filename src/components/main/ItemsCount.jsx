import React, {useState} from 'react'
import "./ItemsCount.css"
import	swal	from "sweetalert"

const ItemsCount = ( {nombre, foto, precio, stock} ) => {
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
    <div className='contenedorCartas'>
      <div className="Cartas">
        <img className="FotoProducto" src={foto} alt= {nombre} />    
        <p className="nombrePrecio"> {nombre} - ${precio} </p>
        <div className='cantidadAgregar'>
          <button onClick={()=>btnCantidadResta(cantidad==1 ? 0 : -1)}>-</button>
          <p>{cantidad}</p>
          <button onClick={()=>btnCantidadSuma((cantidad==stock ? 0 : +1))}>+</button>
          <button>Agregar </button>
				</div>
      </div>
		</div>	
  )
}

export default ItemsCount