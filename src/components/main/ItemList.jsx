import React from 'react'
import Item from './Item'


const ItemList = ({ productList }) => {

  return (
    <div className='contenedorCartas'>
			{productList.map((item)=> <Item key={item.codigo} item={item} />)}
        
			
		</div>
  )
}

export default ItemList