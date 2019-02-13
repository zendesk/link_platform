# frozen_string_literal: true

FactoryBot.define do
  factory :phone do
    link_instance
    location
    service
    organization
    contact
    service_at_location
    number '(123) 456-7890'
    extension 369
    phone_type 'voice'
    language 'eng'
    description 'Main voice line'
  end
end
