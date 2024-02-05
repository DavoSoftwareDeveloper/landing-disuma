import '../styles/form.css'
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser'


function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
      console.log(data)
      emailjs.send("service_dd676tp","template_rgue9yb",{
        name: watch("name"),
        email: watch("email"),
        number: watch("telefono"),
        peticion: watch("peticion"),
        },{ publicKey:"zfZclTIpt-QI0kGT9"});
      toast.success("mensaje enviado!")
      reset()
  }


  console.log(watch("name")) // watch input value by passing the name of it


//   const [ formData, setFormData ] = useState({
//     name: null,
//     email: null,
//     telefono: null,
//     peticion: null
// })
// const [error, setError] = useState({
//     errorName: null,
//     errorEmail: null,
//     errorTelefono: null,
//     errorPeticion: null
// })

// const {name, email, telefono, peticion } = formData


// const onChange = (e) => {
//     switch(e.target.name){
//         case "name":
//             if (e.target.value.length < 2 || e.target.value.length > 30) { 
//                  setError(prev => ({...prev, errorName: "Introduce un nombre válido"}))}
//             else { 
//                error.errorName && setError(prev => ({...prev, errorName: null}))
//             }
//         break;
//         case "email":
//             if (e.target.value.length < 2 || e.target.value.length > 30) { 
//                  setError(prev => ({...prev, errorName: "Introduce un email válido"}))}
//             else { 
//                error.errorName && setError(prev => ({...prev, errorName: null}))
//             }
//         break;
//         case "telefono":
//             if (e.target.value.length < 2 || e.target.value.length > 30) { 
//                  setError(prev => ({...prev, errorName: "Introduce un telefono válido"}))}
//             else { 
//                error.errorName && setError(prev => ({...prev, errorName: null}))
//             }
//         break;
//         case "peticion":
//             if (e.target.value.length < 2 || e.target.value.length > 30) { 
//                  setError(prev => ({...prev, errorName: "Introduce un mensaje válido"}))}
//             else { 
//                error.errorName && setError(prev => ({...prev, errorName: null}))
//             }
//         break;


//     }
//     setFormData((prevState) =>({
//         ...prevState,
//         [e.target.name]: e.target.value
//     }))
// }
// const onSubmit = (e) => {
//     e.preventDefault()
//     const errorArray = Object.values(error)
//     const anyError = errorArray.find(value => value != null)
//     console.log(anyError)
//     if(anyError) return

//     const allData  = Object.values(formData)
//     const allDataFilled = allData.find(value => value === null)
//     console.log(allDataFilled)
//     if(allDataFilled === null) return

//     toast.success("mensaje enviado!")
//     console.log(formData);

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
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
              <label htmlFor="name">Nombre*</label>
              <input type='text' className='form-control' id='name' 
              name='name' placeholder='Introduce tu nombre'
              {...register("name", {required: {
                value: true,
                message: "Nombre es requerido"
              }, maxLength:{
                value: 20,
                message:"El nombre debe tener menos de 20 caracteres"
              }, minLength:{
                value: 2,
                message: "El nombre debe tener más de 2 caracteres"
              } })}
              />
                     { errors.name && <span style={{color:"red"}}>{errors.name.message}</span>}
          </div>
          
          <div className="form-group">
              <label htmlFor="email">E-mail*</label>
              <input type='email' className='form-control' id='email' 
              name='email' placeholder='Introduce tu email'
              {...register("email", {required: {
                value: true,
                message: "El email es obligatorio"
              }, pattern:{
                value: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
                message: "El email no es válido"
              }})}
               />
               { errors.email && <span style={{color:"red"}}>{errors.email.message}</span>}
          </div>
          <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input type='number' className='form-control' id='telefono' 
              name='telefono' placeholder='Introduce tu teléfono'
              {...register("telefono")}
              />
              { errors.telefono && <span style={{color:"red"}}>{errors.telefono.message}</span>}
          </div>
          <div className="form-group">
              <label htmlFor="peticion">En qué podemos ayudarte?*</label>
              <textarea type='text' className='form-control2' id='peticion' 
              name='peticion'  placeholder='Me gustaría pedir presupuesto sobre...'
              {...register("peticion", {required: {
                value: true,
                message: "El mensaje es obligatorio"
              }})}
               />
               { errors.peticion && <span style={{color:"red"}}>{errors.peticion.message}</span>}
          </div>
          <div className='form-group'>
              <button type='submit' className='btn'>Enviar</button>
          </div>
      </form>
      </section>
        <div id="staff"></div>
        <ToastContainer
          className='toast-position' 
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          theme="dark"
          />
      </>
      )
}
export default Form
