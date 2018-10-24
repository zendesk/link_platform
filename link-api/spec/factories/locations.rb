FactoryBot.define do
  factory :location do
    link_instance
    name "Some Location"
    alternate_name "Some Location"
    description "This is a location where things happen"
    transportation "Take a bus, or a train!"
    latitude 123.4
    longitude 123.5
    organization
  end
end
