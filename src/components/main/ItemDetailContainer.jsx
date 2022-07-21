import  {useState, useEffect} from "react";
import "./ItemListContainer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotate} from "@fortawesome/free-solid-svg-icons"
import ItemDetail from './ItemDetail'
import {useParams} from	 "react-router-dom"
import swal from 'sweetalert';
import { db } from "../../Firebase/firebase"
import { getDoc, collection, doc } from "firebase/firestore"


function ItemDetailContainer({seleccion}){
	const [product, setProduct] = useState({})
	const [loading, setLoading] = useState(true)
	
	const {codigo} = useParams();

	useEffect(()=>{
		const productsCollection = collection(db, "products");
		const refDoc = doc(productsCollection, codigo)
		console.log(codigo);
		getDoc(refDoc)
				.then((res)=>{ setProduct({
			id: res.id,
			...res.data()})
			console.log(product);
		})
		.catch("error")
		.finally(()=>setLoading(false))
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
				{loading ? <div className="cargando"><FontAwesomeIcon icon={faRotate} />  Cargando selección...</div> :<ItemDetail  product={product} initial= {1} onAdd={onAdd} /> }     
		</>
  	)
}
    
export default ItemDetailContainer