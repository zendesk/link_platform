import React from 'react'
import PropTypes from 'prop-types'
import { createComponent, createComponentWithProxy } from 'react-fela'
import { Button } from '@zendeskgarden/react-buttons'
import { Field, Input } from '@zendeskgarden/react-forms'
import { useNavigation } from 'components/Routing'

import sailor from 'images/sailor.svg'
import strings from 'strings'
import Spacer from 'components/layout/Spacer'
import Row from 'components/layout/Row'
import Padded from 'components/layout/Padded'

const AdminTopBar = ({ tags }) => {
  const navigate = useNavigation()

  return (
    <AdminTopBarContainer>
      <Row>
        <SearchBarContainer>
          <SailorImage src={sailor} />
          <Field>
            <Input
              placeholder={strings.AdminTopBar_SearchPlaceholder}
              aria-label={strings.AdminTopBar_SearchPlaceholder}
            />
          </Field>
        </SearchBarContainer>
        <Spacer space={'2.2'} />
        <NewButton onClick={ () => navigate('/organizations/new') }>{strings.AdminTopBar_NewButton}</NewButton>
      </Row>
      <Padded>{tags}</Padded>
    </AdminTopBarContainer>
  )
}

const AdminTopBarContainer = createComponent(() => ({}))

const SailorImage = createComponent(
  () => ({
    bottom: '-.5rem',
    position: 'relative',
    zIndex: '-1',
  }),
  'img',
  ['src']
)

const NewButton = createComponentWithProxy(
  () => ({
    alignSelf: 'flex-end',
  }),
  Button
)

const SearchBarContainer = createComponent(() => ({
  minWidth: '500px',
  display: 'flex',
  flexDirection: 'column',
}))

AdminTopBar.propTypes = {
  tags: PropTypes.array.isRequired
}

export default AdminTopBar
