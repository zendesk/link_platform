import RemoteData from 'remote-data-js'

const api = path => `/api/${path}`

const urls = {
  organizations: api('organizations'),
  organization: id => api(`organizations/${id}`),
  locations: api('locations'),
  location: id => api(`locations/${id}`),
}

const toMap = promise => {
  return promise.then(xs => xs.reduce((dict, x) => {
    dict[x.id] = x
    return dict
  }, {}))
}
const toJson = x => x.json()

export const init = () => ({
  organizations: [],
  locations: []
})

const actionTypes = {
  FETCH_ORGANIZATIONS_SUCCESS: 'FETCH_ORGANIZATIONS_SUCCESS',
  FETCH_ORGANIZATIONS_FAILED: 'FETCH_ORGANIZATIONS_FAILED',
  FETCH_ORGANIZATION_SUCCESS: 'FETCH_ORGANIZATION_SUCCESS',
  FETCH_ORGANIZATION_FAILED: 'FETCH_ORGANIZATION_FAILED',
  FETCH_LOCATIONS_SUCCESS: 'FETCH_LOCATIONS_SUCCESS',
  FETCH_LOCATIONS_FAILED: 'FETCH_LOCATIONS_FAILED',
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
        ...state,
        organizations: {
          ...state.organizations,
          stateData: { // this is hacky
            ...state.organizations.stateData,
            [action.organization.data.id]: action.organization.data,
          }
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
  fetch: (state, id) => () =>
        new RemoteData({
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
  find: (state, id) => {
    return state.organizations.isSuccess() && state.organizations.data[id]
    ? new RemoteData({ state: 'REMOTE_DATA_SUCCESS', stateData: state.organizations.data[id] })
    : null
  },
  locations: (id, state) =>
    state.locations.filter(location =>
      state.organizations[id].locations.includes(location.id)
    ),
}

export const locations = {
  data: new RemoteData({
    url: urls.locations,
    parse: response => toMap(toJson(response)),
  }),
  fetchSuccess: locations => ({
    type: actionTypes.FETCH_LOCATIONS_SUCCESS,
    locations
  }),
  fetchFailed: err => ({
    type: actionTypes.FETCH_LOCATIONS_FAILED,
    err
  })
}

export const location = {
  data: id => new RemoteData({
    url: urls.location(id),
    parse: response => toJson(response),
  }),
  fetchSuccess: locations => ({
    type: actionTypes.FETCH_LOCATIONS_SUCCESS,
    locations
  }),
  fetchFailed: err => ({
    type: actionTypes.FETCH_LOCATIONS_FAILED,
    err
  })
}
