# frozen_string_literal: true

FactoryBot.define do
  factory :contact do
    link_instance
    organization
    service
    service_at_location
    name 'Jennifer Hanson'
    title 'Contact Person'
    department 'Help Department'
    email 'jhanson@example.com'
  end
end
