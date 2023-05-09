import { useEffect, useState } from 'react'
import '../styles/testimonials.css'

function Testimonials() {
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


  return (
    <div className="testimonials">
      <section className='heading'>
        <h2>Reseñas</h2>
        <hr className="hr"/>
        <p> Hecha un vistazo a lo que opinan nuestros clientes.</p>
      </section>
      { activeMenu ? (
        <div className="flex">
        <div className="testi">
          <div className="circle-testi"></div>
          <div className="text-testi"></div>
        </div>
        <div className="testi">
          <div className="circle-testi"></div>
          <div className="text-testi"></div>
        </div>
        <div className="testi">
          <div className="circle-testi"></div>
          <div className="text-testi"></div>
        </div>
      </div>
      ) : (
      
        <div className="flex-movil">
        <div className="testi-movil">
          <div className="circle-testi-movil"></div>
          <div className="text-testi-movil"></div>
        </div>
        <div className="testi-movil">
          <div className="circle-testi-movil"></div>
          <div className="text-testi-movil"></div>
        </div>
        <div className="testi-movil">
          <div className="circle-testi-movil"></div>
          <div className="text-testi-movil"></div>
        </div>
      </div>) }

      <div id="contacto"></div>
    </div>
  )
}

export default Testimonials
