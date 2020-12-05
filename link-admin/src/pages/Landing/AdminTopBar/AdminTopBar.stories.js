import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import * as Taxonomy from '../Taxonomy'
import AdminTopBar from '.'

export const actions = {
  addNewOrganization: action('addNew')
}

const selectedTaxonomies = [1]

const tags = Taxonomy.all.map((taxonomy, index) => (
  <Taxonomy.Tag
    key={ taxonomy.id }
    onClick={ action('clicked tag') }
    isActive={ selectedTaxonomies.includes(taxonomy.id) }
    taxonomy={{ index, ...taxonomy }}
  />
))

storiesOf('AdminTopBar', module).add('default', () => (
  <AdminTopBar tags={ tags } { ...actions } />
))
