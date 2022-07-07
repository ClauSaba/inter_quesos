import  {useState, useEffect} from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.css"
import {getData} from "../mocks/Productos"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotate} from "@fortawesome/free-solid-svg-icons"
import {useParams} from "react-router-dom"

function ItemListContainer({greeting, seleccion}){
	const [productList, SetProductList] = useState([])
	const [loading, SetLoading] = useState(true)

	const {tipo} = useParams();
	

	useEffect(()=>{
		SetLoading(true)
		getData(tipo)
		.then((res)=>(SetProductList(res)))
		.catch("error")
		.finally(()=>SetLoading(false))
	},[tipo])

	return(
		<>
      <h1 className="greeting">{ tipo ? seleccion : greeting }</h1>   
			{loading ? <div className="cargando"><FontAwesomeIcon icon={faRotate} />  Cargando selección...</div> :<ItemList productList={productList} /> }     
			
		</>
  )}
    
export default ItemListContainer;