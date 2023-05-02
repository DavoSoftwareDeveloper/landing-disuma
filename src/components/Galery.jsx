import '../styles/galery.css'
import foto1 from "../assets/exterior.jpeg"
import foto2 from "../assets/exterior2.jpeg"
import foto3 from "../assets/exterior3.jpeg"
import foto4 from "../assets/exterior4.jpeg"
import foto5 from "../assets/exterior5.jpeg"
import foto6 from "../assets/escalera.jpeg"
import estructura from "../assets/estructura.jpeg"
import foto8 from "../assets/structura2.jpeg"
import foto9 from "../assets/armario.jpeg"
import foto10 from "../assets/mesa.jpeg"
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { useEffect, useState } from "react"

function Galery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentSlide2, setCurrentSlide2] = useState(0)
  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(undefined)



  useEffect(()=>{
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  },[])


  useEffect(()=>{
    if(screenSize <= 800){
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    } 
  },[screenSize])
  
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 0 : (prev) => prev + 1)
  }
  const prevSlide = () => {
    setCurrentSlide2(currentSlide2 === 1 ? 0 : (prev) => prev + 1)
  }

  return (
    <div className="galery">
      <section className='heading'>
        <h2>Galería de trabajos</h2>
        <hr className="hr" />
        <p> Tenemos experiencia en una gran cantidad de...</p>
      </section>
      <div className="galery-content">
        <section className="section">
          <div className='pre-container'>
            <div style={activeMenu ? {transform: `translateX(-${currentSlide * 50}vw)`}:{transform: `translateX(-${currentSlide * 120}vw)`} } className="photo-container">
              <div className="container">
                <div className='image-container'>
                  <div className='image-frame'>
                    <img className="image" src={foto2} alt="galery-photo" />
                  </div>
                  <div className='image-frame'>
                    <img className="image" src={foto4} alt="galery-photo" />
                  </div>
                </div>
                <div className="image-tall">
                  <img className="image2" src={foto5} alt="galery-photo" />
                </div>
              </div>
              <div className="container">
                <div>
                  <div className='image-frame'>
                    <img className="image" src={foto4} alt="galery-photo" />
                  </div>
                  <div className='image-frame'>
                    <img className="image" src={foto2} alt="galery-photo" />
                  </div>
                </div>
                <div className="image-tall">
                  <img className="image2" src={foto6} alt="galery-photo" />
                </div>
              </div>
            </div>
          </div>
          <div className="details-photo">
            <h2>Barandillas y escaleras</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum pariatur amet consequuntur, officia tenetur consectetur esse ratione, culpa quidem, molestiae placeat aut! Placeat, deleniti molestias expedita cum est sapiente laudantium.</p>
            <div onClick={nextSlide} className="galery-pages">
              <HiArrowRight className='arrow' />
            </div>
          </div>
        </section>
        <br />
        {activeMenu ? (
        <section className="section">
          <div className="details-photo">
            <h2>Contención y estructuras</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum pariatur amet consequuntur, officia tenetur consectetur esse ratione, culpa quidem, molestiae placeat aut! Placeat, deleniti molestias expedita cum est sapiente laudantium.</p>
            <div onClick={prevSlide} className="galery-pages-left">
              <HiArrowLeft className='arrow' />
            </div>
          </div>
          <div className='pre-container'>
            <div style={{transform: `translateX(-${currentSlide2 * 50}vw)`} } className="photo-container2">
              <div className="container">
                <div className='image-container'>
                  <div className='image-frame'>
                    <img className="image" src={foto8} alt="galery-photo" />
                  </div>
                  <div className='image-frame'>
                    <img className="image" src={foto3} alt="galery-photo" />
                  </div>
                </div>
                <div className="image-tall">
                  <img className="image2" src={foto1} alt="galery-photo" />
                </div>
              </div>
              <div className="container">
                <div>
                  <div className='image-frame'>
                    <img className="image" src={estructura} alt="galery-photo" />
                  </div>
                  <div className='image-frame'>
                    <img className="image" src={foto10} alt="galery-photo" />
                  </div>
                </div>
                <div className="image-tall">
                  <img className="image2" src={foto9} alt="galery-photo" />
                </div>
              </div>
            </div>
          </div>
        </section>
        ) : ( 
        <section className="section">
          <div className='pre-container'>
            <div style={{transform: `translateX(-${currentSlide2 * 120}vw)`} } className="photo-container2">
              <div className="container">
                <div className='image-container'>
                  <div className='image-frame'>
                    <img className="image" src={foto8} alt="galery-photo" />
                  </div>
                  <div className='image-frame'>
                    <img className="image" src={foto3} alt="galery-photo" />
                  </div>
                </div>
                <div className="image-tall">
                  <img className="image2" src={foto1} alt="galery-photo" />
                </div>
              </div>
              <div className="container">
                <div>
                  <div className='image-frame'>
                    <img className="image" src={estructura} alt="galery-photo" />
                  </div>
                  <div className='image-frame'>
                    <img className="image" src={foto10} alt="galery-photo" />
                  </div>
                </div>
                <div className="image-tall">
                  <img className="image2" src={foto9} alt="galery-photo" />
                </div>
              </div>
            </div>
          </div>
          <div className="details-photo">
            <h2>Contención y estructuras</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum pariatur amet consequuntur, officia tenetur consectetur esse ratione, culpa quidem, molestiae placeat aut! Placeat, deleniti molestias expedita cum est sapiente laudantium.</p>
            <div onClick={prevSlide} className="galery-pages-left">
              <HiArrowRight className='arrow' />
            </div>
          </div>
        </section>)}
       
      </div>
      <div id="reseñas"></div>
    </div>
  )
}

export default Galery
