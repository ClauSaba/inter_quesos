import  {useState, useEffect} from "react";
import "./ItemListContainer.css"
import {getData} from "../mocks/Productos"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotate} from "@fortawesome/free-solid-svg-icons"
import ItemDetailSelector from "./ItemDetailSeletor";



function ItemDetailContainer({seleccion}){
	const [itemDetail, SetItemDetail] = useState([])
	const [loading, SetLoading] = useState(true)

	useEffect(()=>{
		getData
		.then((res)=>(SetItemDetail(res)))
		.catch("error")
		.finally(()=>SetLoading(false))
	},[])

	return(
		<>
      <h1 className="greeting">{seleccion}</h1>   
			{loading ? <div className="cargando"><FontAwesomeIcon icon={faRotate} />  Cargando selección...</div> :<ItemDetailSelector  itemDetail={itemDetail} /> }     
			
		</>
  )}
    
export default ItemDetailContainer;