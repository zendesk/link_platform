# frozen_string_literal:true

module Api
	module ApiParamsHelper
		SERVICE_PARAMS = %i[
      organization_id
      program_id
      name
      alternate_name
      description
      url
      email
      status
      interpretation_services
      application_services
      wait_time
      fees
      accreditations
      licenses
    ].freeze
    CONTACT_PARAMS = %i[
      organization_id
      service_id
      service_at_location_id
      name
      title
      department
      email
    ].freeze
	end
end
