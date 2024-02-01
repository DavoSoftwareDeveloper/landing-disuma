import useScreenSize from '../hooks/useScreenSize'

function Trabajador() {

const {activeMenu} = useScreenSize()

return activeMenu ? (
        <>
          <div className="content-trabajador">
            <div className="image-trabajador"></div>
            <div className="texto-trabajador"></div>
          </div>
          <br />
        </>
      ) : (
        <>
          <div className="content-trabajador">
            <div className="image-trabajador-movil"></div>
            <div className="texto-trabajador-movil"></div>
          </div>
          <br />
        </>
      )
  
}

export default Trabajador
