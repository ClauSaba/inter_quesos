import "./CartFinalizar.css"
import swal from "sweetalert";
import { useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";
import { db } from '../../Firebase/firebase';
import { collection, addDoc, serverTimestamp} from 'firebase/firestore';


const CartFinalizar = () => {
  
  const {products, clear} = useContext(CartContext)
  const [venta, setIDventa] = useState ()
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [email, setEmail] = useState();
  const [entrega, setEntrega] = useState();
  const [mensaje, setMensaje] = useState(false)  
  const cambiarNombre = (e) =>{
    const value = e.target.value;
    setNombre(value);
  }
  const cambiarApellido = (e) =>{
    const value = e.target.value;
    setApellido(value);
  }
  const cambiarEmail = (e) =>{
    const value = e.target.value;
    setEmail(value);
  }
  const cambiarEntrega = (e) =>{
    const value = e.target.value;
    setEntrega(value);
  }
  const importe = products.reduce((acc, item) => acc + item.precio * item.cantidad ,0)

  function mensajeFinal(){
    swal({
      title: `Sr ${nombre}, su pago de $ ${importe} fue realizado`,
      text: `el id de la compra es:  ${venta}  `,
      icon: 'success'
  })
    clear()
  }

  const confirmaDatos =  () =>{
     const ventasCollection = collection (db, "ventas");
     addDoc(ventasCollection,{ 
      total: importe,
      productos: products,
      nombre: nombre,
      apellido: apellido,
      email: email,
      observaciones: entrega,
      date: serverTimestamp()}) 
      .then((result)=>
      setIDventa(result.id))
      .catch("error")
      setMensaje(true)
    }
    

  return (
    <div className="Finalizar">
			<form className='formFinalizar'>
        <input id="nombre" className='campo' name="nombre" placeholder='introduzca su nombre' value={ nombre } onChange={(e)=>cambiarNombre(e)} />
				<input id="apellido"  name="apellido" className='campo' placeholder='introduzca su apellido' value={apellido} onChange={(e)=>cambiarApellido(e)} />
				<input id="email"  name="email" className='campo' placeholder='introduzca su email' value={email} onChange={(e)=>cambiarEmail(e)}  />
				<input id="entrega"  name="entrega" className='campo'placeholder='observaciones de entrega' value={entrega} onChange={(e)=>cambiarEntrega(e)} />
    </form>
    
    {mensaje ? 
    <button className="btnMensaje" onClick={()=>mensajeFinal()}>Pagar</button>:
        <button className="btnConfirma" onClick={()=>confirmaDatos()}>Confirmar</button>}
		</div>
  )
}

export default CartFinalizar