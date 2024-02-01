import '../styles/trabajador.css'
import Trabajador from './Trabajador'

function Trabajadores() {



  return (
    <div className="trabajador">
      <section className='heading'>
        <h2>Equipo</h2>
        <hr className="hr" />
        <p> Conoce a nuestro equipo!</p>
      </section>
        <Trabajador />
        <Trabajador />
        <Trabajador />
    </div>
  )
}

export default Trabajadores
