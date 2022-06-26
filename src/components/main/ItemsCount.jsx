import React, {useState} from 'react'
import "./ItemsCount.css"
import	swal	from "sweetalert"

const ItemsCount = ( {nombre, foto, precio, stock} ) => {
	const [cantidad, setCantidad] = useState(1);

	const btnCantidad = (valor) => {
		setCantidad(cantidad + valor)
			cantidad == stock && swal({
				title: 'No hay mas stock disponible',
				text: `actualmente hay ${stock} unidades`,
				icon: 'error',
				timer: 2000,
  			timerProgressBar: true,
			});	
	}

  return (
    <div className='contenedorCartas'>
      <div className="Cartas">
        <img className="FotoProducto" src={foto} alt= {nombre} />    
        <p className="nombrePrecio"> {nombre} - ${precio} </p>
        <div className='cantidadAgregar'>
          <button onClick={()=>btnCantidad(cantidad==1 ? 0 : -1)}>-</button>
          <p>{cantidad}</p>
          <button onClick={()=>btnCantidad((cantidad==stock ? 0 : +1))}>+</button>
          <button>Agregar </button>
				</div>
      </div>
		</div>	
  )
}

export default ItemsCount