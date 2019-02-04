import {useState, useEffect} from 'react'

export function useWindowWidth() {
  const [innerWidth, setInnerWidth] = useState(null)

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return innerWidth
}

export function getMobileScreensize() {
  return useWindowWidth() < 768
}
