import  {useState, useEffect} from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.css"
import {getData} from "../mocks/Productos"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotate} from "@fortawesome/free-solid-svg-icons"



function ItemListContainer({greeting}){
	const [productList, SetProductList] = useState([])
	const [loading, SetLoading] = useState(true)

	useEffect(()=>{
		getData
		.then((res)=>(SetProductList(res)))
		.catch("error")
		.finally(()=>SetLoading(false))
	},[])

	return(
		<>
      <h1 className="greeting">{greeting}</h1>   
			{loading ? <div className="cargando"><FontAwesomeIcon icon={faRotate} />  Cargando selección...</div> :<ItemList productList={productList} /> }     
			
		</>
  )}
    
export default ItemListContainer;