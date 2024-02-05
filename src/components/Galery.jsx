import "../styles/galery.css";
import {
  barandillasSet,
  contencionSet,
  mueblesSet,
  puertasSet,
} from "../utils/data";
import SectionGallery from "./subcomponents/SectionGallery";
import { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";

function Galery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  const { activeMenu } = useScreenSize();

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 0 : (prev) => prev + 1);
  };
  const prevSlide = () => {
    setCurrentSlide2(currentSlide2 === 1 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="galery">
      <section className="heading">
        <h2>Galería de trabajos</h2>
        <hr className="hr" />
        <p>
          {" "}
          Tenemos experiencia en una gran cantidad de trabajos de cerrajería.
        </p>
        <p> Tanto en hierro como en inoxidable.</p>
      </section>
      <div className="galery-content">
        {activeMenu ? (
          <SectionGallery
            slideState={currentSlide}
            slideFn={nextSlide}
            dataSet={barandillasSet}
          >
            <SectionGallery.SectionDescription />
            <SectionGallery.SectionImages />
          </SectionGallery>
        ) : (
          <SectionGallery
            slideState={currentSlide}
            slideFn={nextSlide}
            dataSet={barandillasSet}
          >
            <SectionGallery.SectionImages />
            <SectionGallery.SectionDescription />
          </SectionGallery>
        )}
        <br />
        <SectionGallery
          slideState={currentSlide2}
          slideFn={prevSlide}
          dataSet={contencionSet}
        >
          <SectionGallery.SectionImages />
          <SectionGallery.SectionDescription />
        </SectionGallery>
        <br />
        {activeMenu ? (
          <SectionGallery
            slideState={currentSlide}
            slideFn={nextSlide}
            dataSet={puertasSet}
          >
            <SectionGallery.SectionDescription />
            <SectionGallery.SectionImages />
          </SectionGallery>
        ) : (
          <SectionGallery
            slideState={currentSlide}
            slideFn={nextSlide}
            dataSet={puertasSet}
          >
            <SectionGallery.SectionImages />
            <SectionGallery.SectionDescription />
          </SectionGallery>
        )}
        <br />
        <SectionGallery
          slideState={currentSlide2}
          slideFn={prevSlide}
          dataSet={mueblesSet}
        >
          <SectionGallery.SectionImages />
          <SectionGallery.SectionDescription />
        </SectionGallery>
        <br />
      </div>
      <div id="reseñas"></div>
    </div>
  );
}

export default Galery;
