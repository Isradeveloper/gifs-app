import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifsApp = () => {

  //Cuando queremos guardar información y esa información cambia el HTML usamos hook useState
  const [categories, setCategories] = useState(['One piece', 'Cristiano Ronaldo'])

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifsApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories = {setCategories} categories={categories}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/* Listado de Gifs */}
      <ol>
        {categories.map(category => { //Generamos los li con .map
          return <li key={category}>{category}</li> //Cuando generamos elementos dinamicos debemos usar keys
        })}
      </ol>

      {/* Gif item */}
    </>
  )
}
