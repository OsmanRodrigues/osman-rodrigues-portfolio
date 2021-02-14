import React from 'react'
import Home from '../pages/index'
import { render } from '@testing-library/react'

test('check render', () => {
  const { queryByText } = render(<Home />)
  expect(queryByText(/My website/i)).toBeTruthy()
})
