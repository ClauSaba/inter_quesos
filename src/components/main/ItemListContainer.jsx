import Foto101 from "../../img/Foto101.jpg" 
import "./ItemListContainer.css"
import Productos from "./Productos"

function ItemListContainer(){
    return(
        <div className="Cartas">
            <img className="FotoProducto" src={Foto101} alt={Productos.nombre} />
            <p>Roquefort - $2.000</p>
        </div>
        
    )}
    
export default ItemListContainer;