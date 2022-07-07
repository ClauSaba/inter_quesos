import { Link } from "react-router-dom";
import ImgLogo from "../../img/Logo1a.png" 
import "./LogoBrand.css"

function LogoBrand(){
  return(
    <div id="LogoBrand">
      <Link to={"/"}> <img className="imgLogo" src={ImgLogo} alt="Logo La Internacional" /> </Link>
      <h2 className="brand">La Europea</h2>
    </div>
  );
}

export default LogoBrand;