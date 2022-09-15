import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Pruebas en <AddCategory/>', () => {

  test('Debe cambiar el valor de la caja de texto', () => {

    render(<AddCategory onNewCategory={() => { }} />)
    const input = screen.getByRole('textbox')
    fireEvent.input(input, {target: {value:'Saitama'}})
    screen.debug()

    expect(input.value).toBe('Saitama')
  })

  test('Debe de llamar onNewCategory si el input tiene un valor', () => {

    const inputValue ='Saitama'
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory}/>)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, {target: {value: inputValue}}) // Se ingresa al input el value
    screen.debug()
    fireEvent.submit(form) // Se hace submit en el form

    expect(input.value).toBe('')

    expect( onNewCategory ).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)

  })

  test('No se debe llamar onNewCategory si el input tiene un valor vacío', () => {

    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory}/>)
    const form = screen.getByRole('form')

    screen.debug()
    fireEvent.submit(form)
    expect(onNewCategory).toHaveBeenCalledTimes(0)
    expect(onNewCategory).not.toHaveBeenCalled()


  })

})