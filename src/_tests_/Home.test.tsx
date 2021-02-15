import { render, screen } from '@testing-library/react'
import Home from '@pages'

describe('Home page', () => {
  it('renders home page', () => {
    render(<Home />)
    expect(screen.getByText(/Home/i)).toBeInTheDocument()
  })
})
