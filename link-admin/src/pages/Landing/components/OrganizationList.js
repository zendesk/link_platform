import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'
import partial from 'lodash/partial'
import {
  Table,
  Caption,
  Head,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell
} from '@zendeskgarden/react-tables'
import OverflowMenu from './OverflowMenu'

const OrganizationList = ({ organizations, onSelectEdit, onSelectDelete }) => (
  <Table>

    <Head>
      <HeaderRow>
        <HeaderCell width="50%">Name</HeaderCell>
        <HeaderCell width="25%">URL</HeaderCell>
        <HeaderCell width="25%">Updated</HeaderCell>
        <HeaderCell hasOverflow />
      </HeaderRow>
    </Head>
    
    <Body>
      {organizations.map(organization => (
        <OrgRow
          key={ organization.id }
          organization={ organization }
          onEdit={ onSelectEdit }
          onDelete={ onSelectDelete }
        />
      ))}
    </Body>

  </Table>
)

const OrgRow = ({ organization, onEdit, onDelete }) => {
  const onEditOrganization = partial(onEdit, organization)
  const onDeleteOrganization = partial(onDelete, organization)

  return (
    <Row>
      <Cell width="50%" onClick={ onEditOrganization }>
        { organization.name }
      </Cell>
      <Cell width="25%" onClick={ onEditOrganization }>
        { organization.url }
      </Cell>
      <Cell width="25%" onClick={ onEditOrganization }>
        { organization.updatedAt }
      </Cell>
      <Cell>
        <OverflowMenuPadding>
          <OverflowMenu
            onSelectItem={ partial(
              onMenuChange,
              onEditOrganization,
              onDeleteOrganization
            ) }
            menuItems={ overflowItems() }
          />
        </OverflowMenuPadding>
      </Cell>
    </Row>
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
    isDanger: false,
  },
  {
    type: 'item',
    key: DELETE_ITEM,
    label: 'delete',
    isDisabled: false,
    isDanger: false,
  },
]

const onMenuChange = (onEdit, onDelete, selectedKey) => {
  switch (selectedKey) {
    case EDIT_ITEM:
      return onEdit()
    case DELETE_ITEM:
      return onDelete()
  }
}

const OverflowMenuPadding = createComponent(() => ({
  paddingEnd: '4px',
}))

OrganizationList.propTypes = {
  organizations: PropTypes.array.isRequired,
  onSelectEdit: PropTypes.func.isRequired,
  onSelectDelete: PropTypes.func.isRequired,
}

export default OrganizationList
