import '../styles/trabajador.css'
import Trabajador from './subcomponents/Trabajador'
import {trabajadoresData} from "../utils/trabajadoresData"

function Trabajadores() {
  
  return (
    <div className="trabajador">
      <section className='heading'>
        <h2>Equipo</h2>
        <hr className="hr" />
        <p> Conoce a nuestro equipo!</p>
      </section>
      {trabajadoresData.map((equipo, index) => {
        return <Trabajador key={index} trabajador={equipo}/>
      })}
    </div>
  )
}

export default Trabajadores
