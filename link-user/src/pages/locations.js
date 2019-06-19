import { h, Component } from 'preact'
import * as Client from 'link-rest-client'

import LocationList from '../components/LocationList'

const renderError = error => <p>{`${error}`}</p>

class LocationsPage extends Component {
  constructor() {
    super()
    this.state.cache = Client.init()
  }

  componentWillMount() {
    const { cache } = this.state
    const self = this

    Client.locations
      .fetch(cache)
      .then(locations => {
        self.setState({
          cache: Client.updateCache(
            cache,
            Client.locations.fetchSuccess(locations)
          ),
        })
      })
      .catch(err => {
        self.setState({
          cache: Client.updateCache(cache, Client.locations.fetchFailed(err)),
        })
      })
  }

  render(props, state) {
    const { cache } = state
    const locationsData = Client.locations.all(cache)

    return locationsData.case({
      NotAsked: () => 'Initializing...',
      Pending: () => 'Loading...',
      Success: locations => (
        <LocationList locations={Object.values(locations)} />
      ),
      Failure: renderError,
    })
  }
}

export default LocationsPage
