import { h, Component } from 'preact'
import * as Client from '../lib/api-client'

import LocationList from '../components/LocationList'

const renderError = error => <p>{`${error}`}</p>

class LocationsPage extends Component {
  constructor() {
    super()
    this.state = {
      cache: Client.init(),
      locationsData: Client.locations.data
    }
  }

  componentWillMount() {
    const { cache, locationsData } = this.state
    const self = this
    
      locationsData
      .fetch()
      .then(locations => {
        self.setState({
          locationsData: locations,
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
    const { locationsData } = this.state

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
