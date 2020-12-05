import React from 'react'
import { mount } from 'enzyme'
import 'jest-styled-components'
import * as Taxonomy from '.'
import { Tag as GardenTag } from '@zendeskgarden/react-tags'
import Spacer from 'components/layout/Spacer'

const mockOnClick = jest.fn()

const Tag = (props = {}) => <Taxonomy.Tag
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

  it('renders as grey if inactive', () => {
    const wrapper = mount(<Tag />)

    expect(wrapper.find(GardenTag).prop('type')).toEqual('grey')
  })

  it('renders as blue if active', () => {
    const wrapper = mount(<Tag isActive={ true } />)

    expect(wrapper.find(GardenTag).prop('type')).toEqual('blue')
  })

  it('does not add a spacer if it is the first tag', () => {
    const wrapper = mount(<Tag />)

    expect(wrapper.find(Spacer)).toHaveLength(0)
  })

  it('adds a spacer if not the first tag', () => {
    const wrapper = mount(<Tag taxonomy={{ id: 1, index: 1, label: 'foobar' }} />)

    expect(wrapper.find(Spacer)).toHaveLength(1)
  })
})
