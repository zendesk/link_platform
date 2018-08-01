FactoryBot.define do
  factory :contact do
    organization
    # service # TODO: model doesn't exist yet
    # service_at_location # TODO: model doesn't exist yet
    service_id "123" # TODO: remove this after the service factory exists
    service_at_location_id "123" # TODO: remove this after service_at_location factory exists
    name "Jennifer Hanson"
    title "Contact Person"
    department "Help Department"
    email "jhanson@example.com"
  end
end
