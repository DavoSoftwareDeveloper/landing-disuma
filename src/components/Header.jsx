import '../styles/header.css'
import { useState } from 'react'
import {BsChevronCompactRight,BsChevronCompactLeft} from 'react-icons/bs'
import foto from "../assets/trabajos/exterior.jpeg"
import foto5 from "../assets/trabajos/exterior5.jpeg"
import foto4 from "../assets/trabajos/exterior4.jpeg"

function Header() {

  const [currentSlide, setCurrentSlide] = useState(0)


  const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev -1)
  }
  const nextSlide = () => {
      setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev +1)
    }
  return (
    <div className="header">
      <br /> <br />
      <div>
        <div className='metal'></div>
        <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className="container-slide">
            <img className="image-slide" src={foto} alt='imgOne' loading='priority'/>
            <img className="image-slide" src={foto4} alt='imgTwo' loading='priority'/>
            <img className="image-slide" src={foto5} alt='imgThree' loading='priority'/>
        </div>
        <div id="galery" className='metal'></div>
        <div className='wall-content'>
        <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className="content-slide">
          <div className='card'>
            <h1 className='titulo'>Precisión</h1>
            <p className='texto'>Es esencial trabajar al milímetro para evitar futuros problemas o retrasos, una buena medición garantiza el éxito de cualquier estructura.</p>
          </div>
          <div className='card'>
            <h1 className='titulo'>Acabados</h1>
            <p className='texto'>En los acabados se puede ver el nivel de pasión, dedicación y compromiso con el proyecto. Hablan de la persona o empresa que los realiza, si son verdaderos artesanos o no.</p>
          </div>
          <div className='card'>
            <h1 className='titulo'>Detalles</h1>
            <p className='texto'>Ningún trabajo es exáctamente igual a otro. La capacidad de adaptarse a cualquier detalle o requerimiento es necesaria para que los proyectos salgan adelante en los tiempos requeridos.</p>
          </div>
        </div>
        </div>
        <div className='controls'>
            <div  onClick={prevSlide} className='button-slide'>
                <BsChevronCompactLeft className='paginacion'/>
            </div>
            <div onClick={nextSlide} className='button-slide'>
                <BsChevronCompactRight className='paginacion'/>
            </div>
        </div>
      </div>
    </div>
  )
}


export default Header
