/* eslint-disable react/prop-types */
import { useState } from "react"

const Image = ({src, tall}) => {
    const [show, setShow] = useState(false)

    return (
      <>
      {show ? (
        <>
        <div onClick={()=> setShow(prev => !prev)} className='modal'>
        <img className={"image-modal"} src={src} alt="galery-photo" />
        </div>
        </>
        ) : (
          <>
          <img onClick={()=> setShow(prev => !prev)} className={tall ? "image2" : "image"} src={src} alt="galery-photo" />
          </>
          )}
      </>
    )
}
export default Image

  