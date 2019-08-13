import * as actions from './actions'
import * as Service from './reducer'

describe('reducer', () => {
  describe('default', () => {
    it('returns state', () => {
      const result = Service.update({}, '')
      expect(result).toEqual({})
    })
  })
})
