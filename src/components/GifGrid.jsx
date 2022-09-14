import { useEffect } from 'react'
import {getGifs} from '../helpers/getGifs'


export const GifGrid = ({ category }) => {

  useEffect( ()=>{  //Dispara un efecto cuando el componente se renderiza por primera vez
    getGifs(category)
  }, [] )

  return (
    <>
      <h3>{category}</h3>
    </>
  )
}
