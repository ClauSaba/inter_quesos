import "./NavBar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { useState } from "react";


const categorias = [
{
  id:1,
  path: "/category/azul",
  name: "azul"
},
{
  id:2,
  path: "/category/duro",
  name: "duro"
},
{
  id:3,
  path: "/category/semiduro",
  name: "semiduro"
},
{
  id:4,
  path: "/category/fresco",
  name: "fresco"
}
]

const NavBar = () =>{

  const [muestraMenuTipo, setMuestraMenuTipo] = useState(false)
  
  const subMenuTipo = () =>{
    const cambia =! muestraMenuTipo;
    setMuestraMenuTipo(cambia)
  }


  return(
    <div id="NavBar">

      <div className="ConSubMenus">
      {muestraMenuTipo ? 
      <>
      <h2 className="tituloMenuCategorias" onClick={()=>subMenuTipo()} > Por Tipo <FontAwesomeIcon icon={faCircleChevronDown}  /> </h2>
      <ul id="subMenu">
        {categorias.map((cat) => {
          return(
          <Link to={cat.path} key={cat.id} onClick={()=>subMenuTipo()} className="MenuCategorias">  {cat.name}</Link>
          )
        })}       
      </ul>
      </>
      :
      <h2 className="tituloMenuCategorias" onClick={()=>subMenuTipo()}> Por Tipo <FontAwesomeIcon icon={faCircleChevronDown}  /> </h2>}
      </div>
    </div>
  )
}

export default NavBar;

