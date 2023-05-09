import { useEffect, useState } from 'react'
import '../styles/trabajador.css'

function Trabajador() {

  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(undefined)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])


  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className="trabajador">
      <section className='heading'>
        <h2>Equipo</h2>
        <hr className="hr" />
        <p> Conoce a nuestro equipo!</p>
      </section>
      {activeMenu ? (
        <>
          <div className="content-trabajador">
            <div className="image-trabajador"></div>
            <div className="texto-trabajador"></div>
          </div>
          <br />
          <div className="content-trabajador">
            <div className="image-trabajador"></div>
            <div className="texto-trabajador"></div>
          </div>
          <br />
          <div className="content-trabajador">
            <div className="image-trabajador"></div>
            <div className="texto-trabajador"></div>
          </div>
          <br />
        </>
      ) : (
        <>
          <div className="content-trabajador">
            <div className="image-trabajador-movil"></div>
            <div className="texto-trabajador-movil"></div>
          </div>
          <br />
          <div className="content-trabajador">
            <div className="image-trabajador-movil"></div>
            <div className="texto-trabajador-movil"></div>
          </div>
          <br />
          <div className="content-trabajador">
            <div className="image-trabajador-movil"></div>
            <div className="texto-trabajador-movil"></div>
          </div>
        </>
      )}
    </div>
  )
}

export default Trabajador
