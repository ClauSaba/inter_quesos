import React from 'react'
import Item from './Item'
import	swal	from "sweetalert"


const ItemList = ({ productList }) => {
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
			{productList.map((item)=> <Item initial= {1} onAdd={onAdd}  key={item.codigo} item={item} />)}
        
			
		</div>
  )
}

export default ItemList