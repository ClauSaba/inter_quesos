import ItemsCount from './ItemsCount';
import "./Item.css"
import { Link } from 'react-router-dom';


const Item = ( {item, onAdd} ) => {
	const {codigo, nombre, precio, stock, foto, origen, bandera} = item ;

  return (
    <div className="Cartas" key={codigo}  >
      <Link to={`/detalle/${codigo}`}><img className="FotoProducto" src={foto} alt= {nombre} /></Link>      
      <p className="nombrePrecio"> {nombre} - ${precio} </p>
      <div className='cantidadAgregar'>
	       <ItemsCount  initial= {1} onAdd= {onAdd}  item= {item} stock = {stock} nombre ={nombre} ></ItemsCount>
			</div>
	    <h6 className="banderas"><img src={bandera} alt={origen} className="imagenBandera"   />  {origen}  <img src={bandera} alt={origen} className="imagenBandera" /></h6>
		</div>	
  )
}

export default Item