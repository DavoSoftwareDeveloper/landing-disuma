import useScreenSize from "../../hooks/useScreenSize";
import PropTypes from "prop-types";

function Trabajador({ trabajador }) {
  const { activeMenu } = useScreenSize();

  return activeMenu ? (
    <>
      <div className="content-trabajador">
        <div className="image-trabajador">
          <img src={trabajador.image} />
        </div>
        <div className="texto-trabajador">
          <p style={{ fontWeight: "bold" }}>{trabajador.name}</p>
          <p>{trabajador.comentario}</p>
        </div>
      </div>
      <br />
    </>
  ) : (
    <>
      <div className="content-trabajador">
        <div className="image-trabajador-movil">
          <img src={trabajador.image} />
        </div>
        <div className="texto-trabajador-movil">
          <p style={{ fontWeight: "bold" }}>{trabajador.name}</p>
          <p>{trabajador.comentario}</p>
        </div>
      </div>
      <br />
    </>
  );
}
Trabajador.propTypes = {
  trabajador: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    comentario: PropTypes.string,
  }),
};

export default Trabajador;
