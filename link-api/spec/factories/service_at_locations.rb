FactoryBot.define do
  factory :service_at_location do
    link_instance
    service
    location
    description "Helpful words"
  end
end
