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
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
    </div>
   

  )
}

export default Nav
