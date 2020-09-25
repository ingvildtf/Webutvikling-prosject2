import React from 'react'
import renderer from 'react-test-renderer'
import Mainpage from './mainpage'

test('First snapshot test', () => {
  const component = renderer.create(<Mainpage />)
  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
