# frozen_string_literal: true

FactoryBot.define do
  factory :postal_address do
    link_instance
    location
    attention 'Wilma Flintstone'
    address_1 '1019 Bedrock Blvd'
    city 'Bedrock City'
    region 'Greater Crater Lake'
    state_province 'CA'
    postal_code '12345'
    country 'Gaia'
  end
end
