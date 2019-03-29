import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tag as GardenTag } from '@zendeskgarden/react-tags'

import Spacer from '../../../components/layout/Spacer'
import Row from '../../../components/layout/Row'

const all = [
  { id: 1, label: 'Food' },
  { id: 2, label: 'Housing' },
  { id: 3, label: 'Hygiene' },
  { id: 4, label: 'Medical' },
  { id: 5, label: 'Technology' },
]

class Tag extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    taxonomy: PropTypes.object.isRequired,
  }

  render() {
    const {
      onClick,
      isActive,
      taxonomy: { id, index, label },
    } = this.props

    return (
      <Row>
        {index > 0 ? <Spacer space={'.5'} /> : ''}
        <GardenTag
          type={isActive ? 'blue' : 'grey'}
          onClick={() => onClick(id)}
        >
          {label}
        </GardenTag>
      </Row>
    )
  }
}

export { Tag, all }
