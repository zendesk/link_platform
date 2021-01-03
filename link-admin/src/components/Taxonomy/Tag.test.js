import React from 'react'
import { mount } from 'enzyme'
import 'jest-styled-components'
import TaxonomyTag from './Tag'
import { Tag as GardenTag } from '@zendeskgarden/react-tags'

const mockOnClick = jest.fn()

const Tag = (props = {}) => <TaxonomyTag
  onClick={ mockOnClick }
  isActive={ false }
  taxonomy={{ id: 1, index: 0, label: 'foobar' }}
  { ...props }
/>

describe('<Tag />', () => {
  it('renders correct taxonomy label', () => {
    const wrapper = mount(<Tag />)

    expect(wrapper.find(GardenTag).text()).toEqual('foobar')
  })
})
