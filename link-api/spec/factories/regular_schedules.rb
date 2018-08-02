FactoryBot.define do
  factory :regular_schedule do
    service
    location
    service_at_location
    weekday 1
    opens_at "2018-08-01 14:58:55"
    closes_at "2018-08-01 14:58:55"
  end
end
