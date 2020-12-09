import React from 'react'
import PropTypes from 'prop-types'

import { Tag as GardenTag } from '@zendeskgarden/react-tags'

const TaxonomyTag = ({ className, onClick, isActive, taxonomy: { id, label } }) => {
  const handleClick = id => {
    onClick(id)
  }
  return (
    <div className={ className }>
      <GardenTag hue={ isActive ? 'blue' : 'grey' } onClick={ () => handleClick(id) }>
        { label }
      </GardenTag>
    </div>
  )
}

TaxonomyTag.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  taxonomy: PropTypes.object.isRequired
}

export default TaxonomyTag
