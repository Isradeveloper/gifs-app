import React from 'react'
import { useState } from 'react'


export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('') // Utilizamos useState para tener la informacion del input en el html

  
  const onInputChange = ({ target }) => { //Desestructuramos el target de e
    // console.log(target.value)
    setInputValue(target.value) // Asignamos lo que está escrito en el hook
  }


  const onSubmit = (event)=>{
    event.preventDefault() // Evitamos que se reinicie la pagina
    if (inputValue.trim().length <=1) return // Solo se ejecuta si tenemos mas de 1 letra
    // setCategories((categories)=>[inputValue, ...categories]) //El set tiene un callback del dato anterior
    onNewCategory(inputValue.trim())
    setInputValue("")
  }

  return (
    <>
      <form onSubmit={(event)=> onSubmit(event) /*Utilizamos el evento onSubmit*/}>  
        <input type="text"
          name="buscar-gif"
          id="buscar-gif"
          placeholder='Buscar gifs'
          value={inputValue} // Se le asigna el valor el hook al input
          onChange={(event) => onInputChange(event)} // Utilizamos la función onInputChange
        />
      </form>
    </>
  )
}
