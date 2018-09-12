FactoryBot.define do
  factory :link_instance do
    name "LinkSF"
    email "bcolfer@zendesk.com"
    subdomain "example"

    after(:build) do |link_instance|
      link_instance.owner ||= FactoryBot.build(:owner, link_instance: link_instance)
    end
  end
end
