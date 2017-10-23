import React from 'react'
import { shallow } from 'enzyme'
import Card from './index'
import serializer from 'enzyme-to-json/serializer'
expect.addSnapshotSerializer(serializer)

const links = [
  {
    href: 'http://zander.wtf',
    text: 'Zander'
  },
  {
    href: 'http://nimbletank.com',
    text: 'Nimbletank'
  }
]

test('Card snapshot test', () => {
  const component = shallow(<Card title='Zander' links={links} />)
  expect(component).toMatchSnapshot()
})

it('should render a Card with title', () => {
  const wrapper = shallow(<Card title='Events' />)
  expect(wrapper.instance().props.title).toEqual('Events')
})
