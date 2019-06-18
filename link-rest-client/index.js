import zipObject from 'lodash/zipObject'
import RemoteData from 'remote-data-js'

const api = path => `api/${path}`

const urls = {
  organizations: api('organizations'),
  organization: id => api(`organization/${id}`),
  locations: api('locations'),
  location: id => api(`location/${id}`),
  services: api('services'),
  service: id => api(`service/${id}`),
}

const toMap = promise => {
  return promise.then(xs => zipObject(xs.map(x => x.id), xs))
}
const toJson = x => x.json()

export const init = () => ({
  organizations: new RemoteData({
    url: urls.organizations,
    parse: response => toMap(toJson(response)),
  }),
  locations: new RemoteData({
    url: urls.locations,
    parse: response => toMap(toJson(response)),
  }),
  services: new RemoteData({
    url: urls.services,
  }),
})

const actionTypes = {
  FETCH_ORGANIZATIONS_SUCCESS: 'FETCH_ORGANIZATIONS_SUCCESS',
  FETCH_ORGANIZATIONS_FAILED: 'FETCH_ORGANIZATIONS_FAILED',
  FETCH_ORGANIZATION_SUCCESS: 'FETCH_ORGANIZATION_SUCCESS',
  FETCH_ORGANIZATION_FAILED: 'FETCH_ORGANIZATION_FAILED',
  FETCH_LOCATIONS_SUCCESS: 'FETCH_LOCATIONS_SUCCESS',
  FETCH_LOCATIONS_FAILED: 'FETCH_LOCATIONS_FAILED',
  FETCH_SERVICES_SUCCESS: 'FETCH_SERVICES_SUCCESS',
  FETCH_SERVICES_FAILED: 'FETCH_SERVICES_FAILED',
}

export const updateCache = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        organizations: action.organizations,
      }
    case actionTypes.FETCH_ORGANIZATIONS_FAILED:
      return state

    case actionTypes.FETCH_ORGANIZATION_SUCCESS:
      return {
        organizations: {
          ...state.organizations,
          [action.organization.id]: action.organization,
        },
      }

    case actionTypes.FETCH_ORGANIZATION_FAILED:
      return state

    case actionTypes.FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: action.locations
      }

    case actionTypes.FETCH_LOCATIONS_FAILED: {
      return state
    }

    case actionTypes.FETCH_SERVICES_SUCCESS:
      return {
        services: {
          ...state.services,
          services: action.services
        }
      }

    case actionTypes.FETCH_SERVICES_FAILED: {
      return state
    }

    default:
      return state
  }
}

export const update = (state, action) => ({
  ...state,
  cache: updateCache(state.cache, action),
})

export const organizations = {
  fetch: state => () => state.organizations.fetch(),
  fetchSuccess: organizations => ({
    type: actionTypes.FETCH_ORGANIZATIONS_SUCCESS,
    organizations,
  }),
  fetchFailed: err => ({
    type: actionTypes.FETCH_ORGANIZATIONS_FAILED,
    err,
  }),
  all: state => state.organizations,
}

export const organization = {
  fetch: (state, id) =>
    state.organizations.isFinished() && state.organizations.data[id]
      ? { state: 'SUCCESS', stateData: state.organizations.data[id] }
      : new RemoteData({
          url: urls.organization(id),
        }),
  fetchSuccess: organization => ({
    type: actionTypes.FETCH_ORGANIZATION_SUCCESS,
    organization,
  }),
  fetchFailed: err => ({
    type: actionTypes.FETCH_ORGANIZATION_FAILED,
    err,
  }),
  find: (id, state) => state.organizations[id],
  locations: (id, state) =>
    state.locations.filter(location =>
      state.organizations[id].locations.includes(location.id)
    ),
  services: (id, state) =>
    state.services.filter(location =>
      state.organizations[id].services.includes(location.id)
    ),
}

export const locations = {
  fetch: state => state.locations.fetch(),
  fetchSuccess: locations => ({
    type: actionTypes.FETCH_LOCATIONS_SUCCESS,
    locations
  }),
  fetchFailed: err => ({
    type: actionTypes.FETCH_LOCATIONS_FAILED,
    err
  }),
  all: state => state.locations
}

export const services = {
  fetch: state => state.services.fetch(),
  fetchSuccess: services => ({
    type: actionTypes.FETCH_SERVICES_SUCCESS,
    services
  }),
  fetchFailed: err => ({
    type: actionTypes.FETCH_SERVICES_FAILED,
    err
  }),
  all: state => state.services
}


