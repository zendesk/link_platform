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
    SERVICE_AT_LOCATION_PARAMS = %i[
      service_id
      location_id
      description
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
    ELIGIBILITY_PARAMS = %i[
      service_id
      eligibility
    ].freeze
    REGULAR_SCHEDULE_PARAMS = %i[
      service_id
      location_id
      service_at_location_id
      weekday
      opens_at
      closes_at
    ].freeze
    HOLIDAY_SCHEDULE_PARAMS = %i[
      service_id
      location_id
      service_at_location_id
      closed
      opens_at
      closes_at
      start_date
      end_date
    ].freeze
    LANGUAGE_PARAMS = %i[
      service_id
      location_id
      language
    ].freeze
    PHONE_PARAMS = %i[
      location_id
      service_id
      organization_id
      contact_id
      service_at_location_id
      number
      extension
      phone_type
      language
      description
    ].freeze
    ORGANIZATION_PARAMS = %i[
      name
      alternate_name
      description
      email
      url
      tax_status
      tax_id
      year_incorporated
      legal_status
    ].freeze
    LOCATION_PARAMS = %i[
      name
      alternate_name
      description
      transportation
      latitude
      longitude
      organization_id
    ].freeze
    PROGRAM_PARAMS = %i[
      name
      alternate_name
      organization_id
    ].freeze
    PHYSICAL_ADDRESS_PARAMS = %i[
      location_id
      attention
      address_1
      city
      region
      state_province
      postal_code
      country
    ].freeze
    POSTAL_ADDRESS_PARAMS = %i[
      location_id
      attention
      address_1
      city
      region
      state_province
      postal_code
      country
    ].freeze
  end
end
