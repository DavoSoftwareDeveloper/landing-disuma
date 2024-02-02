import useScreenSize from '../../hooks/useScreenSize'
import PropTypes from 'prop-types'; 

function CardTestimonial({testigo}) {
    
    const {activeMenu} = useScreenSize()
    
  return ( activeMenu ? (

    <div className="testi">
    <div className="circle-testi">
        <img src={testigo.image} />
    </div>
    <div className="text-testi">
      <p style={{fontWeight: "bold"}}>{testigo.name}</p>
      <p>{testigo.comentario}</p>
    </div>
  </div>
  ) : (
    <div className="testi-movil">
    <div className="circle-testi-movil">
        <img src={testigo.image} />
    </div>
    <div className="text-testi-movil">
      <p style={{fontWeight: "bold"}}>{testigo.name}</p>
      <p>{testigo.comentario}</p>
    </div>
  </div>
  )
  )
}

CardTestimonial.propTypes = {
  testigo: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    comentario: PropTypes.string,
  })
}


export default CardTestimonial
