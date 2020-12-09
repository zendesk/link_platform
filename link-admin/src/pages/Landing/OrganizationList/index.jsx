import React from 'react'
import PropTypes from 'prop-types'
import partial from 'lodash/partial'
import {
  Table,
  Head,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell
} from '@zendeskgarden/react-tables'
import OverflowMenu from './OverflowMenu'
import Link from 'components/Routing/Link'
import { Anchor } from '@zendeskgarden/react-buttons'
import formatUrl from 'lib/formatUrl'
import { useNavigation } from 'components/Routing'

const OrganizationList = ({ organizations }) => {
  const navigate = useNavigation()

  return (
    <Table>
      <Head>
        <HeaderRow>
          <HeaderCell>Name</HeaderCell>
          <HeaderCell>URL</HeaderCell>
          <HeaderCell>Updated</HeaderCell>
          <HeaderCell hasOverflow />
        </HeaderRow>
      </Head>
      
      <Body>
        { organizations.map(organization => {
          const onEditOrganization = () => navigate(`/organizations/${organization.id}`)
          const onDeleteOrganization = () => {}

          return (
            <Row key={ organization.id }>
              <Cell>
                <Link to={ `/organizations/${organization.id}` }>{ organization.name }</Link>
              </Cell>
              <Cell>
                <Anchor href={ formatUrl(organization.url) }>{ organization.url }</Anchor>
              </Cell>
              <Cell>
                { organization.updatedAt }
              </Cell>
              <Cell hasOverflow>
                <OverflowMenu
                  onSelectItem={ partial(
                    onMenuChange,
                    onEditOrganization,
                    onDeleteOrganization
                  ) }
                  menuItems={ overflowItems() }
                />
              </Cell>
            </Row>
          )
        }) }
      </Body>

    </Table>
  )
}

const EDIT_ITEM = 'overflow-edit'
const DELETE_ITEM = 'overflow-delete'

const overflowItems = () => [
  {
    type: 'item',
    key: EDIT_ITEM,
    label: 'edit',
    isDisabled: false,
    isDanger: false
  },
  {
    type: 'item',
    key: DELETE_ITEM,
    label: 'delete',
    isDisabled: false,
    isDanger: false
  }
]

const onMenuChange = (onEdit, onDelete, selectedKey) => {
  switch (selectedKey) {
    case EDIT_ITEM:
      return onEdit()
    case DELETE_ITEM:
      return onDelete()
    default:
      return
  }
}

OrganizationList.propTypes = {
  organizations: PropTypes.array.isRequired
}

export default OrganizationList
