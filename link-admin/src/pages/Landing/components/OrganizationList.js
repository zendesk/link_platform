import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'
import partial from 'lodash/partial'
import Tables from '@zendeskgarden/react-tables'
import OverflowMenu from './OverflowMenu'

const { Head, HeaderRow, HeaderCell, Cell } = Tables

const Header = () => (
  <Head>
    <HeaderRow>
      <HeaderCell width="50%">Name</HeaderCell>
      <HeaderCell width="25%">URL</HeaderCell>
      <HeaderCell width="25%">Updated</HeaderCell>
      <HeaderCell menu />
    </HeaderRow>
  </Head>
)

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

const Row = ({ organization, onEdit, onDelete }) => {
  const onEditOrganization = partial(onEdit, organization)
  const onDeleteOrganization = partial(onDelete, organization)

  return (
    <Tables.Row>
      <Cell width="50%" onClick={onEditOrganization}>
        {organization.name}
      </Cell>
      <Cell width="25%" onClick={onEditOrganization}>
        {organization.url}
      </Cell>
      <Cell width="25%" onClick={onEditOrganization}>
        {organization.updatedAt}
      </Cell>
      <Cell menu>
        <OverflowMenuPadding>
          <OverflowMenu
            onSelectItem={partial(
              onMenuChange,
              onEditOrganization,
              onDeleteOrganization
            )}
            menuItems={overflowItems()}
          />
        </OverflowMenuPadding>
      </Cell>
    </Tables.Row>
  )
}

const Body = ({ organizations, onSelectEdit, onSelectDelete }) => (
  <Tables.Body>
    {organizations.map(organization => (
      <Row
        key={organization.id}
        organization={organization}
        onEdit={onSelectEdit}
        onDelete={onSelectDelete}
      />
    ))}
  </Tables.Body>
)

const OrganizationList = ({ organizations, onSelectEdit, onSelectDelete }) => (
  <Tables.Table>
    <Header />
    <Body
      organizations={organizations}
      onSelectEdit={onSelectEdit}
      onSelectDelete={onSelectDelete}
    />
  </Tables.Table>
)

OrganizationList.propTypes = {
  organizations: PropTypes.array.isRequired,
  onSelectEdit: PropTypes.func.isRequired,
  onSelectDelete: PropTypes.func.isRequired,
}

export default OrganizationList
