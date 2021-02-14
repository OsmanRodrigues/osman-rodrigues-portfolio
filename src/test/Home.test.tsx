import { getPage } from 'next-page-tester'
import { screen } from '@testing-library/react'

describe('Home page', () => {
  it('renders home page', async () => {
    const { render, page } = await getPage({ route: '/' })
    console.log(page)
    render()
    expect(screen.getByText(/My website/i)).toBeTruthy()
  })
})
