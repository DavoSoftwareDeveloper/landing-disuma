import '../styles/trabajador.css'
import Trabajador from './Trabajador'
import equipo from "../utils/data"

function Trabajadores() {

  return (
    <div className="trabajador">
      <section className='heading'>
        <h2>Equipo</h2>
        <hr className="hr" />
        <p> Conoce a nuestro equipo!</p>
      </section>
        <Trabajador trabajador={equipo[0]}/>
        <Trabajador trabajador={equipo[1]}/>
        <Trabajador trabajador={equipo[2]}/>
    </div>
  )
}

export default Trabajadores
