
import { h, Component } from 'preact';

import Layout from '../components/Layout';
import Location from '../components/Location';

import * as Client from '../lib/api-client'

// TODO: remove mock data
const organization = {
    id: '1',
    longDescription: 'This is such a great organization',
    name: 'Great Org',
    phones: [],
    url: '',
};


class LocationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cache: Client.init(),
      locationData: Client.location.data(props.id)
    };
  }

  componentWillMount() {
    const { locationData } = this.state
    const self = this

      locationData
      .fetch()
      .then(location => {
        self.setState({
          locationData: location
        })
      })
      .catch(err => {
        self.setState({
          cache: Client.updateCache(cache, Client.locations.fetchFailed(err)),
        })
      })
  }

  render(props, state) {
    const { locationData } = this.state
    const renderError = error => <p>{`${error}`}</p>

    return locationData.case({
      NotAsked: () => 'Initializing...',
      Pending: () => 'Loading...',
      Success: location => (
        <Layout>
          <Location location={location} organization={organization}></Location>
        </Layout>
      ),
      Failure: renderError,
    })
  }
};
export default LocationPage;
