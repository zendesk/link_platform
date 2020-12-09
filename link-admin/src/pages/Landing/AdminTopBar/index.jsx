import React from 'react'
import { Button } from '@zendeskgarden/react-buttons'
import { Field, Input } from '@zendeskgarden/react-forms'
import { useNavigation } from 'components/Routing'

import strings from 'strings'
import Row from 'components/layout/Row'
import TaxonomyTags from '../Taxonomy'

const AdminTopBar = () => {
  const navigate = useNavigation()

  return (
    <div>
      <Row className="flex flex-wrap w-full gap-2">
        <Field className="flex-grow">
          <Input
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

export default AdminTopBar
