import axios from 'axios'

export const STATUS = {
	IDLE: 'IDLE',
	LOADING: 'LOADING',
	SUCCESS: 'SUCCESS',
	ERROR: 'ERROR'
}

const api = axios.create({
	baseURL: '/api/'
})

const auth = axios.create({
	baseURL: '/auth/'
})

// auth.interceptors.request.use(request => {
// 	console.log('Starting request', JSON.stringify(request, null, 2))
// 	return request
// })

// auth.interceptors.response.use(response => {
//   console.log('Response:', JSON.stringify(response, null, 2))
//   return response
// })

const urls = {
	organizations: 'organizations',
	organization: id => `organizations/${id}`,
	locations: 'locations',
	location: id => `locations/${id}`,
	login: 'sign_in.json',
	logout: 'sign_out.json',
	validateToken: 'validate_token.json'
}

const Client = {
	fetchOrganizations: () => api.get(urls.organizations),

	fetchOrganization: id => api.get(urls.organization(id)),

	fetchLocations: () => api.get(urls.locations),

	fetchLocation: (id) => api.get(urls.location(id)),

	loginAdmin: (email, password) => auth.post(urls.login, {email, password}),

	logoutAdmin: () => auth.post(urls.logout)
}

export default Client
