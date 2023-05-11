import '../styles/galery.css'
import {foto1, foto2, foto3, foto4, foto5, foto6, estructura, foto8, foto9, foto10}  from "../assets/index"
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { useEffect, useState } from "react"

function Galery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentSlide2, setCurrentSlide2] = useState(0)
  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(undefined)


  const Image = ({src, tall}) => {
    const [show, setShow] = useState(false)

    return (
      <>
      {show ? (
        <>
        <div onClick={()=> setShow(prev => !prev)} className='modal'>
        <img className={tall ? "image-modal-2" : "image-modal"} src={src} alt="galery-photo" />
        </div>
        </>
        ) : (
          <>
          <img onClick={()=> setShow(prev => !prev)} className={tall ? "image2" : "image"} src={src} alt="galery-photo" />
          </>
          )}
      </>
    )
  }

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
        <p> Tenemos experiencia en una gran cantidad de trabajos de cerrajería.</p>
        <p> Tanto en hierro como en inoxidable.</p>
      </section>
      <div className="galery-content">
        <section className="section">
          <div className='pre-container'>
            <div style={activeMenu ? {transform: `translateX(-${currentSlide * 50}vw)`}:{transform: `translateX(-${currentSlide * 120}vw)`} } className="photo-container">
              <div className="container">
                <div className='image-container'>
                  <div className='image-frame'>
                    <Image src={foto2} />
                  </div>
                  <div className='image-frame'>
                  <Image src={foto4} />
                  </div>
                </div>
                <div className="image-tall">
                <Image src={foto5} tall="tall" />
                </div>
              </div>
              <div className="container">
                <div className='image-container'>
                  <div className='image-frame'>
                    <Image src={foto4} />
                  </div>
                  <div className='image-frame'>
                    <Image src={foto2} />
                  </div>
                </div>
                <div className="image-tall">
                <Image src={foto6} tall="tall" />
                </div>
              </div>
            </div>
          </div>
          <div className="details-photo">
            <h2>Barandillas y escaleras</h2>
            <p>Realizamos todo tipo de escaleras y barandilas a medida, nos amoldamos a cualquier requerimiento.</p>
            <p>Se realiza primeramente un estudio para determinar si el espacio cumple con las medidas necesarias.</p>
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
            <p>Tenemos un equipo homologado en soldaduras de estructuras</p>
            <p>Pequeñas estructuras de altillo o refuerzos, jardineras de diseño chapa corte, vallas, botelleros de tipo industrial.</p>
            <div onClick={prevSlide} className="galery-pages-left">
              <HiArrowLeft className='arrow' />
            </div>
          </div>
          <div className='pre-container'>
            <div style={{transform: `translateX(-${currentSlide2 * 50}vw)`} } className="photo-container2">
              <div className="container">
                <div className='image-container'>
                  <div className='image-frame'>
                  <Image src={foto8} />
                  </div>
                  <div className='image-frame'>
                  <Image src={foto3} />
                  </div>
                </div>
                <div className="image-tall">
                <Image src={foto1} tall="tall" />
                </div>
              </div>
              <div className="container">
                <div>
                  <div className='image-frame'>
                  <Image src={estructura} />
                  </div>
                  <div className='image-frame'>
                  <Image src={foto10} />
                  </div>
                </div>
                <div className="image-tall-2">
                <Image src={foto9} tall="tall" />
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
                  <Image src={foto8} />
                  </div>
                  <div className='image-frame'>
                  <Image src={foto3} />
                  </div>
                </div>
                <div className="image-tall">
                <Image src={foto1} tall="tall" />
                </div>
              </div>
              <div className="container">
                <div className='image-container'>
                  <div className='image-frame'>
                  <Image src={estructura} />
                  </div>
                  <div className='image-frame'>
                  <Image src={foto10} />
                  </div>
                </div>
                <div className="image-tall">
                <Image src={foto9} tall="tall" />
                </div>
              </div>
            </div>
          </div>
          <div className="details-photo">
            <h2>Contención y estructuras</h2>
            <p>Pequeñas estructuras de altillo o refuerzos, jardineras de diseño chapa corte, vallas, botelleros de tipo industrial.</p>
            <p>Tenemos un equipo homologado en soldaduras de estructuras.</p>
            <div onClick={prevSlide} className="galery-pages-left">
              <HiArrowRight className='arrow' />
            </div>
          </div>
        </section>)}
        <br/>
        <section className="section">
          <div className='pre-container'>
            <div style={activeMenu ? {transform: `translateX(-${currentSlide * 50}vw)`}:{transform: `translateX(-${currentSlide * 120}vw)`} } className="photo-container">
              <div className="container">
                <div className='image-container'>
                  <div className='image-frame'>
                    <Image src={foto2} />
                  </div>
                  <div className='image-frame'>
                  <Image src={foto4} />
                  </div>
                </div>
                <div className="image-tall">
                <Image src={foto5} tall="tall" />
                </div>
              </div>
              <div className="container">
                <div className='image-container'>
                  <div className='image-frame'>
                    <Image src={foto4} />
                  </div>
                  <div className='image-frame'>
                    <Image src={foto2} />
                  </div>
                </div>
                <div className="image-tall">
                <Image src={foto6} tall="tall" />
                </div>
              </div>
            </div>
          </div>
          <div className="details-photo">
            <h2>Puertas y Vallas</h2>
            <p>Realizamos todo tipo de puertas y vallas a medida, nos amoldamos a cualquier requerimiento.</p>
            <p>Se realiza primeramente un estudio para determinar si el espacio cumple con las medidas necesarias.</p>
            <div onClick={nextSlide} className="galery-pages">
              <HiArrowRight className='arrow' />
            </div>
          </div>
        </section>
        <br />
        {activeMenu ? (
        <section className="section">
          <div className="details-photo">
            <h2>Muebles y diseño</h2>
            <p>No hay trabajo que no podamos realizar en hierro, ponédnos a prueba!</p>
            <p>Barbacoas, mesas, chimeneas...</p>
            <div onClick={prevSlide} className="galery-pages-left">
              <HiArrowLeft className='arrow' />
            </div>
          </div>
          <div className='pre-container'>
            <div style={{transform: `translateX(-${currentSlide2 * 50}vw)`} } className="photo-container2">
              <div className="container">
                <div className='image-container'>
                  <div className='image-frame'>
                  <Image src={foto8} />
                  </div>
                  <div className='image-frame'>
                  <Image src={foto3} />
                  </div>
                </div>
                <div className="image-tall">
                <Image src={foto1} tall="tall" />
                </div>
              </div>
              <div className="container">
                <div className='image-container'>
                  <div className='image-frame'>
                  <Image src={estructura} />
                  </div>
                  <div className='image-frame'>
                  <Image src={foto10} />
                  </div>
                </div>
                <div className="image-tall-2">
                <Image src={foto9} tall="tall" />
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
                  <Image src={foto8} />
                  </div>
                  <div className='image-frame'>
                  <Image src={foto3} />
                  </div>
                </div>
                <div className="image-tall">
                <Image src={foto1} tall="tall" />
                </div>
              </div>
              <div className="container">
                <div className='image-container'>
                  <div className='image-frame'>
                  <Image src={estructura} />
                  </div>
                  <div className='image-frame'>
                  <Image src={foto10} />
                  </div>
                </div>
                <div className="image-tall">
                <Image src={foto9} tall="tall" />
                </div>
              </div>
            </div>
          </div>
          <div className="details-photo">
            <h2>Muebles y diseño</h2>
            <p>No hay trabajo que no podamos realizar en hierro, ponédnos a prueba!</p>
            <p>Barbacoas, mesas, chimeneas...</p>
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
