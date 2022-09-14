import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {
  
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async (category) => {
    const newImages = await getGifs(category)
    setImages(newImages)
    setIsLoading(false)
  }

  useEffect(() => {  //Dispara una función  cuando el componente se renderiza por primera vez
    getImages(category)
  }, [])

  return {
    images: images,
    isLoading: isLoading,
  }

}
