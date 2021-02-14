import React from 'react'
import Home from '../src/pages/index'
import renderer from 'react-test-renderer'

it('It should be ok', () => {
  const component = renderer.create(<Home />)

  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
