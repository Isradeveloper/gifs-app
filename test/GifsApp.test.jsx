import { fireEvent, render, renderHook, screen } from "@testing-library/react"
import { useState } from "react"
import { AddCategory, GifGrid } from "../src/components"
import {GifsApp} from '../src/GifsApp'


describe('Pruebas en <GifsApp/>', () => {
  
  const {result} = renderHook(() => {
    useState('One piece')
  })
  const Category = result.current
  test('', () => {

    render(<GifsApp/>)
    
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, {target: {value: 'ABC'}})
    fireEvent.submit(form)

    render(<GifGrid category={Category}/>)

    screen.debug()

  })

})