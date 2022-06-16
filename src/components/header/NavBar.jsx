import "./NavBar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {faCheese} from "@fortawesome/free-solid-svg-icons"

function NavBar(){
  return(
    <div id="NavBarBuscador">
      <div id="BuscadorHeader">
        <input className="InputBuscador" type="search" name="" id="" />
        <button className="ImgBuscador"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </div>
      <ul id="MenuPrincipal">
        <li className="MenuCategorias"> <FontAwesomeIcon icon={faCheese} /> Por Tipo</li>
        <li className="MenuCategorias"> <FontAwesomeIcon icon={faCheese} /> Por Origen</li>
        <li className="MenuCategorias"> <FontAwesomeIcon icon={faCheese} /> De interés</li>
      </ul>
    </div>
  );
}

export default NavBar;