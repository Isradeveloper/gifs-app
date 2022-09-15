import { useState } from 'react'
import {AddCategory, GifGrid} from './components'


export const GifsApp = () => {

  //Cuando queremos guardar información y esa información cambia el HTML usamos hook useState
  const [categories, setCategories] = useState(['One piece'])

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return
    setCategories([newCategory,...categories])

  }

  return (
    <>
      {/* Titulo */}
      <h1>GifsApp</h1>
      <h1 className="autor">Developed by Isra Trujillo</h1>

      {/* Input */}
      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/* Listado de Gifs */}

      {
        categories.map((category)=>( //Se repite dependiendo de la cantidad de categorias

          <GifGrid key={category} category={category}/>

        ))
      }
        

    </>
  )
}


