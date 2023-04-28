import foto2 from "../assets/exterior2.jpeg"

function Galery() {
  return (
    <div className="galery">
      <div className="galery-content">
          <section className="section">
            <div className="photo-container">
              <div>
                <img className="image" src={foto2} alt="galery-photo" />
                <img className="image" src={foto2} alt="galery-photo" />
              </div>
              <div className="image-tall">
                <img className="image2" src={foto2} alt="galery-photo" />
              </div>
            </div>
            <div className="details-photo">
              <h2>Hello</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum pariatur amet consequuntur, officia tenetur consectetur esse ratione, culpa quidem, molestiae placeat aut! Placeat, deleniti molestias expedita cum est sapiente laudantium.</p>
            </div>
          </section>
          <section className="section">
            <div className="details-photo">
            <h2>Hello2</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum pariatur amet consequuntur, officia tenetur consectetur esse ratione, culpa quidem, molestiae placeat aut! Placeat, deleniti molestias expedita cum est sapiente laudantium.</p>
            </div>
            <div className="photo-container2">
            <div>
                <img className="image" src={foto2} alt="galery-photo" />
                <img className="image" src={foto2} alt="galery-photo" />
              </div>
              <div className="image-tall">
                <img className="image2" src={foto2} alt="galery-photo" />
              </div>
            </div>
          </section>
      </div>
    </div>
  )
}

export default Galery
