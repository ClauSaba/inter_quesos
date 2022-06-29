import React from 'react'
import ItemsCount from './ItemsCount'
import Foto101 from "../../img/mozzarella.jpg"
import Foto102 from "../../img/gorgonzola.jpg"
import Foto103 from "../../img/granapadano.jpg"
import Foto104 from "../../img/cacciocavallo.jpg"
import	swal	from "sweetalert"


const Cards = () => {
  const onAdd = (cantidad, nombre) =>{
    swal({
			title: `Se agregaron  ${cantidad} unidades de ${nombre} al carrito`,
			icon: 'success',
			timer: 2000,
		  timerProgressBar: true, 
      showCloseButton: false
		});	
  }

  return (
    <div className='contenedorCartas'>
    <ItemsCount stock= {3} initial= {1} onAdd={onAdd} nombre="Mozzarella" foto={Foto101} precio= {1000} />
    <ItemsCount stock= {4} initial= {1} onAdd={onAdd} nombre="Gorgonzola" foto={Foto102} precio= {1200} />
    <ItemsCount stock= {5} initial= {1} onAdd={onAdd} nombre="Grana Padano" foto={Foto103} precio= {1400} />
    <ItemsCount stock= {6} initial= {1} onAdd={onAdd} nombre="Cacciocavallo" foto={Foto104} precio= {1600} />
    </div>
  )
}

export default Cards