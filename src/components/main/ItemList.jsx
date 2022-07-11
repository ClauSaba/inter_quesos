import React from 'react'
import Item from './Item'



const ItemList = ({ productList }) => {

  return (
    <div className='contenedorCartas'>
		{productList.map((product)=> <Item initial= {1} key={product.codigo} product={product} />)}
	</div>
  )
}

export default ItemList