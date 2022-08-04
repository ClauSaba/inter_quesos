import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone } from "@fortawesome/free-solid-svg-icons";
import "./footer.css"

const Footer = () => {
	return (
    <div className='footer'>
      <div className="copyRight">
        <h6>® 2022 todos los derechos reservados</h6>
        <h6>--- desarrollado por ClauSaba ---</h6>
      </div>
      <ul className="socialMediaLinks">
        <li className ="btnRedes"><a href="https://facebook.com" rel="noopener" >FB </a> </li>
        <li className ="btnRedes"><a href="https://twitter.com" rel="noopener"> TW</a></li>
        <li className ="btnRedes"><a href="https://instagram.com" rel="noopener"> IG </a></li>
      </ul>
      <p className="telefono"><FontAwesomeIcon icon={faPhone} /> 1234-5678</p>
    </div>
  )
}

export default Footer