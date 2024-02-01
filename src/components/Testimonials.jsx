import '../styles/testimonials.css'
import CardTestimonial from './subcomponents/CardTestimonial'

function Testimonials() {
  

  return (
    <div className="testimonials">
      <section className='heading'>
        <h2>Reseñas</h2>
        <hr className="hr"/>
        <p> Hecha un vistazo a lo que opinan nuestros clientes.</p>
      </section>
        <CardTestimonial />
        <CardTestimonial />
        <CardTestimonial />

      <div id="contacto"></div>
    </div>
  )
}

export default Testimonials
