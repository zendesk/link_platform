import React from 'react'
import * as Taxonomy from '.'
import { shallow } from 'utils/testing/fela'

const mockOnClick = jest.fn()
const setShallowTagWrapper = (props = {}) => shallow(
  <Taxonomy.Tag
    onClick={ mockOnClick }
    isActive={ false }
    taxonomy={{ id: 1, index: 0, label: 'foobar' }}
    { ...props }
  />
)

describe('<Tag />', () => {
  it('renders correct taxonomy label', () => {
    const wrapper = setShallowTagWrapper()
    expect(wrapper.find('Tag').render().text()).toEqual('foobar')
  })

  it('renders as grey if inactive', () => {
    const wrapper = setShallowTagWrapper()

    expect(wrapper.find('Tag').prop('type')).toEqual('grey')
  })

  it('renders as blue if active', () => {
    const wrapper = setShallowTagWrapper({ isActive: true })

    expect(wrapper.find('Tag').prop('type')).toEqual('blue')
  })

  it('does not add a spacer if it is the first tag', () => {
    const wrapper = setShallowTagWrapper()

    expect(wrapper.find('FelaComponent[space=".5"]')).toHaveLength(0)
  })

  it('adds a spacer if not the first tag', () => {
    const wrapper = setShallowTagWrapper({
      taxonomy: { id: 1, index: 1, label: 'foobar' }
    })

    expect(wrapper.find('FelaComponent[space=".5"]')).toHaveLength(1)
  })
})
