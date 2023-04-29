import '../styles/form.css'
import { useState } from "react"


function Form() {

  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    telefono: '',
    peticion: ''
})

const {name, email, telefono, peticion } = formData


const onChange = (e) => {
    setFormData((prevState) =>({
        ...prevState,
        [e.target.name]: e.target.value
    }))
}
const onSubmit = (e) => {
    e.preventDefault()


    }
    return ( 
      <>
      <section className='heading'>
        <h2>Contacto</h2>
        <hr className="hr"/>
      <p> Necesitas un soldador profesional o un especialista en estructuras de hierro? Estás en el sitio adecuado!</p>
      <p> Tenemos más de 10 años de experiéncia en estructuras de metal.</p>
      <p> Pide presupuesto sin compromiso!</p>
      </section>
      
      <section className='form'>
      <form onSubmit={onSubmit}>
          <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type='text' className='form-control' id='name' 
              name='name' value={name} placeholder='Introduce tu nombre'
              onChange={onChange} />
          </div>
          <div className="form-group">
              <label htmlFor="name">E-mail</label>
              <input type='email' className='form-control' id='email' 
              name='email' value={email} placeholder='Introduce tu email'
              onChange={onChange} />
          </div>
          <div className="form-group">
              <label htmlFor="name">Teléfono</label>
              <input type='text' className='form-control' id='telefono' 
              name='telefono' value={telefono} placeholder='Introduce tu teléfono'
              onChange={onChange} />
          </div>
          <div className="form-group">
              <label htmlFor="name">En qué podemos ayudarte?</label>
              <textarea type='text' className='form-control2' id='peticion' 
              name='peticion' value={peticion} placeholder='Me gustaría pedir presupuesto sobre...'
              onChange={onChange} />
          </div>
          <div className='form-group'>
              <button type='submit' className='btn'>Enviar</button>
          </div>
      </form>
      </section>
        <div id="staff"></div>
      </>
      )
}
export default Form
