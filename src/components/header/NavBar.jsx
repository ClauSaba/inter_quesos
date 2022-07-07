import "./NavBar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {faCheese} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

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
  return(
    <div id="NavBarBuscador">
      <div id="BuscadorHeader">
        <input className="InputBuscador" type="search" name="" id="" />
        <button className="ImgBuscador"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </div>
      <ul id="MenuPrincipal">
        {categorias.map((cat) => {
          return(
         <Link to={cat.path} key={cat.id}  className="MenuCategorias"> <FontAwesomeIcon icon={faCheese}  /> {cat.name}</Link>
         )
        })}       
      </ul>
    </div>
  )
}

export default NavBar;

