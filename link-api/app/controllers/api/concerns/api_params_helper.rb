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
  end
end
