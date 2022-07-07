import  {useState, useEffect} from "react";
import "./ItemListContainer.css"
import {getProduct} from "../mocks/Productos"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotate} from "@fortawesome/free-solid-svg-icons"
import ItemDetail from './ItemDetail'
import {useParams} from	 "react-router-dom"
import swal from 'sweetalert';




function ItemDetailContainer({seleccion}){
	const [itemDetail, SetItemDetail] = useState({})
	const [loading, SetLoading] = useState(true)

	const {codigo} = useParams();

	useEffect(()=>{
		SetLoading(true)
		getProduct (codigo)
		.then((res)=>(SetItemDetail(res)))
		.catch("error")
		.finally(()=>SetLoading(false))
	},[codigo])

	const onAdd = (cantidad, nombre) =>{
		swal({
				text: `Se agregaron  ${cantidad} unidades de ${nombre} al carrito`,
				icon: 'success',
				timer: 2000,
			  timerProgressBar: true
			});	
	  }

	return(
		<>
      <h1 className="greeting">{seleccion} </h1>  
				{loading ? <div className="cargando"><FontAwesomeIcon icon={faRotate} />  Cargando selección...</div> :<ItemDetail  itemDetail={itemDetail} initial= {1} onAdd={onAdd} /> }     
		</>
  	)
}
    
export default ItemDetailContainer