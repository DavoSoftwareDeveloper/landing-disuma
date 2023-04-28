import logo from "../assets/welder.png"

function Nav() {
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
          <ul className="Navbar">
              <li><a href="#galery">Trabajos</a></li>
              <li><a href="#reseñas">Reseñas</a></li>
              <li><a href="#staff">Equipo</a></li>
              <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
    </div>
   

  )
}

export default Nav
