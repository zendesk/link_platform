FactoryBot.define do
  factory :holiday_schedule do
    service
    location
    service_at_location
    closed false
    opens_at "15:54:20"
    closes_at "15:54:20"
    start_date "2018-10-04"
    end_date "2018-10-04"
  end
end
