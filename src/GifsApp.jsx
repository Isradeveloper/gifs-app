import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifsApp = () => {

  //Cuando queremos guardar información y esa información cambia el HTML usamos hook useState
  const [categories, setCategories] = useState(['One piece', 'Cristiano Ronaldo'])

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])

  }

  return (
    <>
      {/* Titulo */}
      <h1>GifsApp</h1>

      {/* Input */}
      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/* Listado de Gifs */}
      
      {
        categories.map((category)=>(

          <GifGrid key={category} category={category}/>

        ))
      }
        

    </>
  )
}
