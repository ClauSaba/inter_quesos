import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import "./Slider.css"

const Slider = ( {SliderData} ) => {
  return (
    <div className="slider">
      <button className="right-arrow"><FontAwesomeIcon icon={faArrowLeft} /></button>
      <button className="left-arrow"><FontAwesomeIcon icon={faArrowRight} /></button>
      {SliderData.map((slide, index) => {
        return(
          <img className="portada" src={slide.fotoInicio} alt="Fotos Portada" />
        )
      })}
    </div>

  )
}

export default Slider