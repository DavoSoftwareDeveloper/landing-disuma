import '../styles/testimonials.css'
import CardTestimonial from './subcomponents/CardTestimonial'
import {testigosData} from "../utils/testimonialsData"

function Testimonials() {
  

  return (
    <div className="testimonials">
      <section className='heading'>
        <h2>Reseñas</h2>
        <hr className="hr"/>
        <p> Hecha un vistazo a lo que opinan nuestros clientes.</p>
      </section>
      <div className="flex">
        {testigosData.map((testigo, index) => {
          return <CardTestimonial key={index} testigo={testigo}/>
        })}
      </div>
      <div id="contacto"></div>
    </div>
  )
}

export default Testimonials
