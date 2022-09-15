import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Probando GifItem', () => {

  const title = 'One Piece'
  const url = 'https://one-punch.com/saitama.jpg'

  test('Match con el snapshot', () => {

    const { container } = render(<GifItem title={title} url={url} />)

    expect(container).toMatchSnapshot()
  })

  test('Debe de mostrar la imagen con el URl y el ALT indicado', () => {

    render(<GifItem title={title} url={url} />)
    screen.debug()
    // expect(screen.getByRole('img').alt).toBe(title)
    // expect(screen.getByRole('img').src).toBe(url)

    const {src, alt} = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)

  })


  test('Debe de mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()

  })

})
