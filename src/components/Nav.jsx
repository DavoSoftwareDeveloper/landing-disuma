import { useEffect, useState } from "react"
import logo from "../assets/welder-logo.png"
import { AiOutlineMenu } from 'react-icons/ai';
import '../styles/nav.css'
import useScreenSize from '../hooks/useScreenSize'

function Nav() {

  const {activeMenu} = useScreenSize()
  const [search, setSearch] = useState(false)

  const handleMenu = () => {
    setSearch( prev => !prev)
  }

  useEffect(()=>{
    if ( !search ){
            // eslint-disable-next-line no-undef
        gsap.set('#menu', {
          duration:0.5,
          x:"-1000px",
        })
      // eslint-disable-next-line no-undef
      gsap.to('#menu', {
        duration:1,
        x:"0px",
      })
    }
    else{
            // eslint-disable-next-line no-undef
      gsap.to('#menu', {
        duration:1,
        x:"-1000px",
      })
    }
  },[search])

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
            <ul id="menu" className={"show"}>
                <li><a onClick={handleMenu} href="#galery">Trabajos</a></li>
                <hr />
                <li><a onClick={handleMenu} href="#reseñas">Reseñas</a></li>
                <hr />
                <li><a onClick={handleMenu} href="#staff">Equipo</a></li>
                <hr />
                <li><a onClick={handleMenu} href="#contacto">Contacto</a></li>
                <hr />
            </ul> 
          </div>
          
          </div>)}

        </div>
    </div>
   

  )
}

export default Nav
