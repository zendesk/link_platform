import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button } from '@zendeskgarden/react-buttons'
import { useNavigation } from 'components/Routing'

import { Field, MediaInput } from '@zendeskgarden/react-forms'
import { ReactComponent as SearchIcon } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg'
import { ReactComponent as XIcon } from '@zendeskgarden/svg-icons/src/16/x-stroke.svg'

import strings from 'strings'
import Row from 'components/layout/Row'
import TaxonomyTags from '../Taxonomy'

const AdminTopBar = () => {
  const [orgsFilter, setOrgsFilter] = useState('')
  const navigate = useNavigation()

  const handleSearchInput = e => {
    setOrgsFilter(e.target.value)
  }
  
  return (
    <div>
      <Row className="flex flex-wrap w-full gap-2">
        <Field className="flex-grow">
          <MediaInput
            onChange={ handleSearchInput }
            end={ <SearchInputIcon value={ orgsFilter } onClick={ () => setOrgsFilter('') } /> }
            value={ orgsFilter }
            placeholder={ strings.AdminTopBar_SearchPlaceholder }
            aria-label={ strings.AdminTopBar_SearchPlaceholder }
          />
        </Field>
        <Button
          className="self-end"
          onClick={ () => navigate('/organizations/new') }>
          { strings.AdminTopBar_NewButton }
        </Button>
      </Row>
      
      <TaxonomyTags />
    </div>
  )
}

const SearchInputIcon = ({ value, onClick }) => {
  if(value === '') {
    return <SearchIcon />
  }
  return <XIcon onClick={ onClick } className="cursor-pointer" />
}

SearchInputIcon.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
}

export default AdminTopBar
