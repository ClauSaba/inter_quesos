import ImgLogo from "../../img/Logo1a.png" 
import "./LogoBrand.css"

function LogoBrand(){
  return(
    <div id="LogoBrand">
      <img className="imgLogo" src={ImgLogo} alt="Logo La Internacional" />
      <h2 className="brand">La Internacional</h2>
    </div>
  );
}

export default LogoBrand;