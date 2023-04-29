import '../styles/footer.css'
import logo from "../assets/welder.png"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaHome} from 'react-icons/fa'
// import { BsPaypal, BsPersonFill } from 'react-icons/bs'
// import { MdLocationOn } from 'react-icons/md'

function Footer() {
  return (
    <div className="footer">
      <div className='metal'></div>
      <div className="grid">
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
        {/* ============ LocateUs Start here ============ */}
        <div>
            <h2 className=''>Detalles de contacto</h2>
            <div className=''>
                <p>Mataró, Barcelona</p>
                <p>Mobil: 659 43 79 99</p>
                <p>e-mail: info@davodeveloper.com</p>
            </div>
        </div>    
        {/* ============ Profile Start here ============ */}
        {/* <div>
            <h2 className=''> Detalles de contacto</h2>
            <div className=''>
                <p className='flex2'>
                    <span className='text-lg'><BsPersonFill/></span>my account
                </p>
                <p className='flex2'>
                    <span className='text-lg'><BsPaypal/></span>checkout
                </p>
                <p className='flex2'>
                    <span className='text-lg'><FaHome/></span>order tracking
                </p>
                <p className='flex2'>
                    <span className='text-lg'><MdLocationOn /></span>help & support
                </p>
            </div>     
        </div> */}
        {/* ============ Subscribe Start here ============ */}
      </div>
    </div>
  )
}

export default Footer
