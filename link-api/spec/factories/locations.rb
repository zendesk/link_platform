FactoryBot.define do
  factory :location do
    name "Some Location"
    alternate_name "Some Location"
    description "This is a location where things happen"
    transportation "Take a bus, or a train!"
    latitude "1234"
    longitude "1234"
    organization
  end
end
