import * as actions from './actions'
import * as Organization from './reducer'

describe('reducer', () => {
  describe('default', () => {
    it('returns state', () => {
      const result = Organization.update({}, '')
      expect(result).toEqual({})
    })
  })
})
