FactoryBot.define do
  factory :phone do
    location
    service
    organization
    contact
    service_at_location
    number "1234567890"
    extension 1234
    type "work"
    language "English"
    description "This is a phone number"
  end
end
