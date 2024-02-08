import React from "react";
import Image from "./Image";
import PropTypes from "prop-types";
import useScreenSize from "../../hooks/useScreenSize";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

function SectionGallery({ slideState, slideFn, dataSet, children }) {
  return (
    <section className="section">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          slideState,
          slideFn,
          dataSet,
        });
      })}
    </section>
  );
}

SectionGallery.SectionDescription = SectionDescription;
SectionGallery.SectionImages = SectionImages;

function SectionDescription ({ slideState, slideFn, dataSet }) {
  const { title, texto1, texto2 } = dataSet[1].textos;
  return (
    <div className="details-photo">
      <h2>{title}</h2>
      <p>{texto1}</p>
      <p>{texto2}</p>
        {slideState === 0 ? (
      <div onClick={slideFn} className="galery-pages">
          <HiArrowRight className="arrow" />
      </div>
        ) : (
          <div onClick={slideFn} className="galery-pages">
          <HiArrowLeft className="arrow" />
          </div>
        )}
    </div>
  );
}

function SectionImages ({ slideState, dataSet }) {
  const { activeMenu } = useScreenSize();

  return (
    <div className="pre-container">
      <div
        style={
          activeMenu
            ? { transform: `translateX(-${slideState * 50}vw)` }
            : { transform: `translateX(-${slideState * 120}vw)` }
        }
        className="photo-container"
      >
        <div className="container">
          <div className="image-container">
            {dataSet[0].images.container1.map((foto, index) => {
              return (
                <div key={index} className="image-frame">
                  <Image src={foto.src} />
                </div>
              );
            })}
          </div>
          <div className="image-tall">
            <Image src={dataSet[0].images.taller1.src} tall="tall" />
          </div>
        </div>
        <div className="container">
          <div className="image-container">
            {dataSet[0].images.container2.map((foto, index) => {
              return (
                <div key={index} className="image-frame">
                  <Image src={foto.src} />
                </div>
              );
            })}
          </div>
          <div className="image-tall">
            <Image src={dataSet[0].images.taller2.src} tall="tall" />
          </div>
        </div>
      </div>
    </div>
  );
}

SectionGallery.propTypes = {
  slideState: PropTypes.number,
  slideFn: PropTypes.func,
  dataSet: PropTypes.array,
  children: PropTypes.node,
};
SectionDescription.propTypes = {
  slideState: PropTypes.number,
  slideFn: PropTypes.func,
  dataSet: PropTypes.array,
};
SectionImages.propTypes = {
  slideState: PropTypes.number,
  dataSet: PropTypes.array,
};

export default SectionGallery;
