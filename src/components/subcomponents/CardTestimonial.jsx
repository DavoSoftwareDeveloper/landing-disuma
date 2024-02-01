import useScreenSize from '../../hooks/useScreenSize'
  

function CardTestimonial() {
    
    const {activeMenu} = useScreenSize()
    
  return ( activeMenu ? (

    <div className="testi">
    <div className="circle-testi"></div>
    <div className="text-testi"></div>
  </div>
  ) : (
    <div className="testi-movil">
    <div className="circle-testi-movil"></div>
    <div className="text-testi-movil"></div>
  </div>
  )
  )
}

export default CardTestimonial
