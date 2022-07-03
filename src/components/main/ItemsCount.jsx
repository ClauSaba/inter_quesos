import {useState} from 'react'
import	swal	from "sweetalert"

const ItemsCount = ( { stock, onAdd, initial, nombre } ) => {
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
	
}

export default ItemsCount