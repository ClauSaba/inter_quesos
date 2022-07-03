import React from 'react'
import ItemDetail from './ItemDetail'
import swal from 'sweetalert'


const ItemDetailSelector = ({ itemDetail  }) => {
  const onAdd = (cantidad, nombre) =>{
    swal({
			text: `Se agregaron  ${cantidad} unidades de ${nombre} al carrito`,
			icon: 'success',
			timer: 2000,
	    timerProgressBar: true
		});	
  }

  return (
    <div className='contenedorCartas'>
			{<ItemDetail initial= {1} onAdd={ onAdd } itemDetail={ itemDetail [1] } />}
        
			
	</div>
	)
}

export default ItemDetailSelector