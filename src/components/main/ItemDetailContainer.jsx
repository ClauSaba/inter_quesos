import  {useState, useEffect} from "react";
import "./ItemListContainer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotate} from "@fortawesome/free-solid-svg-icons"
import ItemDetail from './ItemDetail'
import {useParams} from	 "react-router-dom"
import { db } from "../../Firebase/firebase"
import { doc, getDoc, collection } from "firebase/firestore"


function ItemDetailContainer({seleccion}){
	const [product, SetProduct] = useState([])
	const [loading, SetLoading] = useState(true)
	
	const {codigo} = useParams();

	useEffect(()=>{
		
		const productsCollection = collection(db, "products");
		const redDoc = doc(productsCollection, codigo);
		getDoc(redDoc).then(result =>{
			SetProduct({
				id: result.id,
				...result.data(),
			})
		}) 
		.catch(err =>console.log (err))
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