import axios from 'axios'

export const STATUS = {
	IDLE: 'IDLE',
	LOADING: 'LOADING',
	SUCCESS: 'SUCCESS',
	ERROR: 'ERROR'
}

const axiosInstance = axios.create({
	baseURL: '/api/'
})

const urls = {
	organizations: 'organizations',
	organization: id => `organizations/${id}`,
	locations: 'locations',
	location: id => `locations/${id}`,
}

const Client = {
	fetchOrganizations: () => axiosInstance.get(urls.organizations),

	fetchOrganization: id => axiosInstance.get(urls.organization(id)),

	fetchLocations: () => axiosInstance.get(urls.locations),

	fetchLocation: (id) => axiosInstance.get(urls.location(id))
}

export default Client
