FactoryBot.define do
  factory :link_instance do
    name
    email "bcolfer@zendesk.com"
    subdomain

    after(:build) do |link_instance|
      link_instance.owner ||= FactoryBot.build(:owner, link_instance: link_instance)
    end
  end

  sequence :name do |n|
    "Link SF #{n}"
  end

  sequence :subdomain do |n|
    "link_sf_#{n}"
  end
end
