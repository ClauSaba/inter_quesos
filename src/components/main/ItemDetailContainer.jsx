import  {useState, useEffect} from "react";
import "./ItemListContainer.css"
import {getProduct} from "../mocks/Productos"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotate} from "@fortawesome/free-solid-svg-icons"
import ItemDetail from './ItemDetail'
import {useParams} from	 "react-router-dom"




function ItemDetailContainer({seleccion}){
	const [product, SetProduct] = useState({})
	const [loading, SetLoading] = useState(true)
	
	const {codigo} = useParams();

	useEffect(()=>{
		SetLoading(true)
		getProduct (codigo)
		.then((res)=>(SetProduct(res)))
		.catch("error")
		.finally(()=>SetLoading(false))
	},[codigo])
	
	return(
		<>
      		<h1 className="greeting">{seleccion} </h1>  
				{loading ? <div className="cargando"><FontAwesomeIcon icon={faRotate} />  Cargando selección...</div> :<ItemDetail  product={product} /> }     
		</>
  	)
}
    
export default ItemDetailContainer