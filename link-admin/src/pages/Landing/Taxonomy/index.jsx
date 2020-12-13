import React from 'react'

import { updateTaxonomyFilters } from 'state/landing'
import { useDispatch, useSelector } from 'react-redux'

import TaxonomyTag from 'components/Taxonomy/Tag'
import Padded from 'components/layout/Padded'

export const categories = [
  { id: 1, label: 'Food' },
  { id: 2, label: 'Housing' },
  { id: 3, label: 'Hygiene' },
  { id: 4, label: 'Medical' },
  { id: 5, label: 'Technology' }
]

const TaxonomyTags = () => {
  const dispatch = useDispatch()
  const { activeTaxonomyFilters } = useSelector(state => state.landing)

  return (
    <Padded className="flex-wrap gap-2">{
      categories.map((taxonomy, index) => (
        <TaxonomyTag
          className=""
          key={ taxonomy.id }
          onClick={ id => dispatch(updateTaxonomyFilters(id)) }
          isActive={ activeTaxonomyFilters.includes(taxonomy.id) }
          taxonomy={{ index, ...taxonomy }}
        />
      )) }
    </Padded>
  )
}

export default TaxonomyTags
