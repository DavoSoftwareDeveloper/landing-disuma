import foto2 from "../assets/exterior2.jpeg"
import {HiArrowLeft,HiArrowRight} from 'react-icons/hi'
import { useState } from "react"

function Galery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentSlide2, setCurrentSlide2] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev +1)
}
const prevSlide = () => {
  setCurrentSlide2(currentSlide2 === 0 ? 3 : (prev) => prev -1)
}


  return (
    <div className="galery">
                  <section className='heading'>
        <h2>Galería de trabajos</h2>
        <hr className="hr"/>
      <p> Tenemos experiencia en una gran cantidad de...</p>
      </section>
      <div className="galery-content">
          <section className="section">
            <div className="photo-container">
              <div>
                <img className="image" src={foto2} alt="galery-photo" />
                <img className="image" src={foto2} alt="galery-photo" />
              </div>
              <div className="image-tall">
                <img className="image2" src={foto2} alt="galery-photo" />
              </div>
            </div>
            <div className="details-photo">
              <h2>Barandillas y escaleras</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum pariatur amet consequuntur, officia tenetur consectetur esse ratione, culpa quidem, molestiae placeat aut! Placeat, deleniti molestias expedita cum est sapiente laudantium.</p>
              <div onClick={prevSlide} className="galery-pages">
              <HiArrowRight className='arrow'/>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="details-photo">
            <h2>Contención y estructuras</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum pariatur amet consequuntur, officia tenetur consectetur esse ratione, culpa quidem, molestiae placeat aut! Placeat, deleniti molestias expedita cum est sapiente laudantium.</p>
              <div onClick={nextSlide} className="galery-pages-left">
                <HiArrowLeft className='arrow'/>
              </div>
            </div>
            <div className="photo-container2">
            <div>
                <img className="image" src={foto2} alt="galery-photo" />
                <img className="image" src={foto2} alt="galery-photo" />
              </div>
              <div className="image-tall">
                <img className="image2" src={foto2} alt="galery-photo" />
              </div>
            </div>
          </section>
      </div>
    </div>
  )
}

export default Galery
