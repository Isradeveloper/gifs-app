import { useState } from 'react'
import { useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem'


export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  const getImages = async (category) => {
    const newImages = await getGifs(category)
    setImages(newImages)
  }

  useEffect(() => {  //Dispara una función  cuando el componente se renderiza por primera vez
    getImages(category)
  }, [])

  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
        {
          images.map((image) => (
            <GifItem key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>
  )
}
