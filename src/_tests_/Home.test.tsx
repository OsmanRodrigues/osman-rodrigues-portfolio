import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
// TODO: check why the tests warning about global theme syntax use (eg. ({theme})=> theme[key])
describe('Home page', () => {
  it('renders home page', () => {
    render(<Home />)
    expect(screen.getByText(/Home/i)).toBeInTheDocument()
  })
})
