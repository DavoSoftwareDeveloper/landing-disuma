import { useEffect, useState } from "react"

function useScreenSize() {

const [activeMenu, setActiveMenu] = useState(true)
const [screenSize, setScreenSize] = useState(undefined)

useEffect(() => {
  const handleResize = () => setScreenSize(window.innerWidth)

  window.addEventListener('resize', handleResize)

  handleResize()

  return () => window.removeEventListener('resize', handleResize)
}, [])


useEffect(() => {
  if (screenSize <= 800) {
    setActiveMenu(false)
  } else {
    setActiveMenu(true)
  }
}, [screenSize])


return { activeMenu }

}
export default useScreenSize