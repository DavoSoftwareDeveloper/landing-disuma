import '../styles/footer.css'
import logo from "../assets/welder.png"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHome} from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
      <div className='metal'></div>
      <div className="grid">
                {/* ============ LocateUs Start here ============ */}
                <div className="contacto">
            <h2 >Detalles de contacto</h2>
            <div >
                <p>Mataró, Barcelona</p>
                <p>Mobil: 659 43 79 99</p>
                <p>e-mail: info@davodeveloper.com</p>
            </div>
        </div>    
        {/* ============ LogoIcon Start here ============ */}
        <div>
        <img className='logo' src={logo} alt='logoLight' />
        <p className='register'>© Di-Suma</p>
        <div className='flex2'>
            <FaFacebook/>
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaHome />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
