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
}

export default ItemsCount