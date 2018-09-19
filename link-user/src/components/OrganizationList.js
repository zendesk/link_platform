import { h } from 'preact'

import s from './OrganizationList.css'

import OrganizationRow from './OrganizationRow'

const OrganizationList = (props) => (
  <div className={s.column}>
    {props.organizations.map((org, index) => (
      <OrganizationRow
        key={`organization-${index}`}
        organization={org} />
    ))}
  </div>
)

export default OrganizationList
