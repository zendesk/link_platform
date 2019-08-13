import * as actions from './actions'
import * as Landing from './reducer'

describe('reducer', () => {
  describe('UPDATE_TAXONOMY_FILTERS', () => {
    it('toggles off existing filter', () => {
      const result = Landing.update(
        { activeTaxonomyFilters: [1, 2, 3] },
        actions.updateTaxonomyFilters(1)
      )
      expect(result.activeTaxonomyFilters).toEqual([2, 3])
    })
    it('toggles on existing filter', () => {
      const result = Landing.update(
        { activeTaxonomyFilters: [1, 2, 3] },
        actions.updateTaxonomyFilters(4)
      )
      expect(result.activeTaxonomyFilters).toEqual([1, 2, 3, 4])
    })
  })
  describe('default', () => {
    it('returns state', () => {
      const result = Landing.update({ activeTaxonomyFilters: [1, 2, 3] }, '')
      expect(result.activeTaxonomyFilters).toEqual([1, 2, 3])
    })
  })
})
