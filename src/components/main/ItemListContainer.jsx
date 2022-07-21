import  {useState, useEffect} from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotate} from "@fortawesome/free-solid-svg-icons"
import {useParams} from "react-router-dom"
import { db } from "../../Firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

function ItemListContainer({greeting, seleccion}){
	const [productList, SetProductList] = useState([])
	const [loading, SetLoading] = useState(true)
	const {tipo} = useParams();

	useEffect(()=>{
		const productsCollection = collection(db, "products");
		const q = tipo ?
		query(productsCollection, where('tipo', '==', tipo ))
		: productsCollection;
		console.log(tipo);
		getDocs(q)
		.then((res)=>{
			const listado = res.docs.map(prod => {
				return {
					id: prod.id,
					...prod.data(),
				}
			})
			SetProductList(listado)
			console.log(listado);
		})
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