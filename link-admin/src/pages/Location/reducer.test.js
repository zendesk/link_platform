import actions, { actionTypes } from './actions'
import reducer from './reducer'

describe('reducer', () => {
  describe('default', () => {
    it('returns state', () => {
      const result = reducer({ activeTaxonomyFilters: [1, 2, 3] }, '')
      expect(result.activeTaxonomyFilters).toEqual([1, 2, 3])
    })
  })
})
