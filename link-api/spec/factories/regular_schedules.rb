FactoryBot.define do
  factory :regular_schedule do
    link_instance
    service
    location
    service_at_location
    weekday 1
    opens_at "2018-10-04 15:24:19"
    closes_at "2018-10-04 15:24:19"
  end
end
