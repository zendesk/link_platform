import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'
import partial from 'lodash/partial'
import Tables from '@zendeskgarden/react-tables'
import OverflowMenu from './OverflowMenu'

const OrganizationList = ({ organizations, onSelectEdit, onSelectDelete }) => (
  <Tables.Table>

    <Tables.Head>
      <Tables.HeaderRow>
        <Tables.HeaderCell width="50%">Name</Tables.HeaderCell>
        <Tables.HeaderCell width="25%">URL</Tables.HeaderCell>
        <Tables.HeaderCell width="25%">Updated</Tables.HeaderCell>
        <Tables.HeaderCell menu />
      </Tables.HeaderRow>
    </Tables.Head>
    
    <Tables.Body>
      {organizations.map(organization => (
        <Row
          key={ organization.id }
          organization={ organization }
          onEdit={ onSelectEdit }
          onDelete={ onSelectDelete }
        />
      ))}
    </Tables.Body>

  </Tables.Table>
)

const Row = ({ organization, onEdit, onDelete }) => {
  const onEditOrganization = partial(onEdit, organization)
  const onDeleteOrganization = partial(onDelete, organization)

  return (
    <Tables.Row>
      <Tables.Cell width="50%" onClick={ onEditOrganization }>
        { organization.name }
      </Tables.Cell>
      <Tables.Cell width="25%" onClick={ onEditOrganization }>
        { organization.url }
      </Tables.Cell>
      <Tables.Cell width="25%" onClick={ onEditOrganization }>
        { organization.updatedAt }
      </Tables.Cell>
      <Tables.Cell menu>
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
      </Tables.Cell>
    </Tables.Row>
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
