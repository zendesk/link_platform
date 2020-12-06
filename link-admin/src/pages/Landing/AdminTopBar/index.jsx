import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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
          {/* <SailorImage src={ sailor } /> */}
          <Field>
            <Input
              placeholder={ strings.AdminTopBar_SearchPlaceholder }
              aria-label={ strings.AdminTopBar_SearchPlaceholder }
            />
          </Field>
        </SearchBarContainer>
        <Spacer space={ '2.2' } />
        <NewButton onClick={ () => navigate('/organizations/new') }>{ strings.AdminTopBar_NewButton }</NewButton>
      </Row>
      <Padded>{ tags }</Padded>
    </AdminTopBarContainer>
  )
}

const AdminTopBarContainer = styled.div``

const SailorImage = styled.img`
  bottom: -0.5rem;
  position: relative;
  z-index: -1;
`

const NewButton = styled(Button)`
  align-self: flex-end;
`

const SearchBarContainer = styled.div`
  min-width: 500px;
  display: flex;
  flex-direction: column;
`

AdminTopBar.propTypes = {
  tags: PropTypes.array.isRequired
}

export default AdminTopBar
