import React from 'react'
import { shallow } from 'enzyme'
import Footer from './index'
import serializer from 'enzyme-to-json/serializer'
expect.addSnapshotSerializer(serializer)

test('Footer snapshot test', () => {
  const component = shallow(<Footer />)
  expect(component).toMatchSnapshot()
})
