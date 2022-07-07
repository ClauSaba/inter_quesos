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
        <li className ="btnFB"><a href="https://facebook.com" target="_blank"> FB </a></li>
        <li className ="btnTW"><a href="https://twitter.com" target="_blank"> TW</a></li>
        <li className ="btnIG"><a href="https://instagram.com" target="_blank"> IG </a></li>
      </ul>
      <p className="telefono"><FontAwesomeIcon icon={faPhone} /> 1234-5678</p>
    </div>
  )
}

export default Footer