import { useState } from 'react'
import {BsChevronCompactRight,BsChevronCompactLeft} from 'react-icons/bs'
import foto from "../assets/exterior.jpeg"
import foto2 from "../assets/exterior2.jpeg"
import foto3 from "../assets/exterior3.jpeg"

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
      <div>
        <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className="container-slide">
            <img className="image-slide" src={foto} alt='imgOne' loading='priority'/>
            <img className="image-slide" src={foto2} alt='imgTwo' loading='priority'/>
            <img className="image-slide" src={foto3} alt='imgThree' loading='priority'/>
        </div>
        <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className="content-slide">
          <div className='card'>
            <h1 className='titulo'>primera</h1>
            <p className='texto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, natus. Amet quis hic officiis et. Veritatis ab repellendus saepe illum nesciunt atque earum iure corporis, eum unde facere harum iste.</p>
          </div>
          <div className='card'>
            <h1 className='titulo'>segunda</h1>
            <p className='texto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, natus. Amet quis hic officiis et. Veritatis ab repellendus saepe illum nesciunt atque earum iure corporis, eum unde facere harum iste.</p>
          </div>
          <div className='card'>
            <h1 className='titulo'>tercera</h1>
            <p className='texto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, natus. Amet quis hic officiis et. Veritatis ab repellendus saepe illum nesciunt atque earum iure corporis, eum unde facere harum iste.</p>
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
