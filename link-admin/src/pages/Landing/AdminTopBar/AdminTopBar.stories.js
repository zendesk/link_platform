import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Tag as TaxonomyTag } from 'components/Taxonomy'
import { categories } from '../Taxonomy'
import AdminTopBar from '.'

export const actions = {
  addNewOrganization: action('addNew')
}

const selectedTaxonomies = [1]

const tags = categories.map((taxonomy, index) => (
  <TaxonomyTag
    key={ taxonomy.id }
    onClick={ action('clicked tag') }
    isActive={ selectedTaxonomies.includes(taxonomy.id) }
    taxonomy={{ index, ...taxonomy }}
  />
))

storiesOf('AdminTopBar', module).add('default', () => (
  <AdminTopBar tags={ tags } { ...actions } />
))
