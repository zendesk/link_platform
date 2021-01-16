import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux'
import { updateSearchFilter } from 'store/landing'

import { Button } from '@zendeskgarden/react-buttons'
import { useNavigation } from 'components/Routing'

import { Field, MediaInput } from '@zendeskgarden/react-forms'
import { ReactComponent as SearchIcon } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg'
import { ReactComponent as XIcon } from '@zendeskgarden/svg-icons/src/16/x-stroke.svg'

import strings from 'strings'
import Row from 'components/layout/Row'
import TaxonomyTags from '../Taxonomy'

const AdminTopBar = () => {
  const landing = useSelector(state => state.landing)
  const dispatch = useDispatch()

  const navigate = useNavigation()



  return (
    <div>
      <Row className="flex flex-wrap w-full gap-2">
        <Field className="flex-grow">
          <MediaInput
            onChange={ e => dispatch(updateSearchFilter(e.target.value)) }
            end={ <SearchInputIcon 
              value={ landing.searchFilter } 
              onClick={ () => dispatch(updateSearchFilter('')) } 
            /> }
            value={ landing.searchFilter }
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
