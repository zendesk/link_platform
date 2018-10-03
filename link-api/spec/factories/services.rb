FactoryBot.define do
  factory :service do
    link_instance
    organization
    program
    name "Service Name"
    alternate_name "Name of Service"
    description "A helpful service"
    url "http://service.example.com"
    email "service@example.com"
    status "Open"
    interpretation_services "None"
    application_services "None"
    wait_time "None"
    fees "None"
    accreditations "None"
    licenses "None"
  end
end
