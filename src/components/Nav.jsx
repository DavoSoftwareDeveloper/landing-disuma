import { useEffect, useState } from "react"
import logo from "../assets/welder.png"
import { AiOutlineMenu } from 'react-icons/ai';
import '../styles/nav.css'

function Nav() {

  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(undefined)
  const [search, setSearch] = useState(true)

  useEffect(()=>{
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  },[])


  useEffect(()=>{
    if(screenSize <= 900){
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    } 
  },[screenSize])
  


  const handleMenu = () => {
    setSearch( prev => !prev)
  }
console.log(search)
  return (
    <div className="nav">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
          <div className="title-container">
            <h1>DI-SUMA</h1>
            <h2>Especialistas del hierro</h2>
          </div>
        </div>
        <div>
          {activeMenu ? (<>
            <ul className="Navbar">
              <li><a href="#galery">Trabajos</a></li>
              <li><a href="#reseñas">Reseñas</a></li>
              <li><a href="#staff">Equipo</a></li>
              <li><a href="#contacto">Contacto</a></li>
          </ul>
          </>) : (<div className="container-nav">
          <AiOutlineMenu className="menu-nav" onClick={handleMenu}/>
          <div className="flexCol">
            <ul className={search ? "hidden" : "show"}>
                <li><a href="#galery">Trabajos</a></li>
                <hr />
                <li><a href="#reseñas">Reseñas</a></li>
                <hr />
                <li><a href="#staff">Equipo</a></li>
                <hr />
                <li><a href="#contacto">Contacto</a></li>
                <hr />
            </ul> 
          </div>
          
          </div>)}

        </div>
    </div>
   

  )
}

export default Nav
