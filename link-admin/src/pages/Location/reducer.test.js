import actions, { actionTypes } from './actions'
import * as Location from './reducer'

describe('reducer', () => {
  describe('default', () => {
    it('returns state', () => {
      const result = Location.update({}, '')
      expect(result).toEqual({})
    })
  })
})
