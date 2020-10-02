import { forEach } from 'lodash'
import formatUrl from './formatUrl'

it('formats a url to include protocol', () => {
	expect(formatUrl('example.com')).toEqual('http://example.com')
	expect(formatUrl('www.example.com')).toEqual('http://www.example.com')
	expect(formatUrl('http://example.com')).toEqual('http://example.com')
	expect(formatUrl('http://www.example.com')).toEqual('http://www.example.com')
	expect(formatUrl('https://example.com')).toEqual('https://example.com')
	expect(formatUrl('https://www.example.com')).toEqual('https://www.example.com')
})