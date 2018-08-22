FactoryBot.define do
  factory :link_instance do
    name "LinkSF"
    email "bcolfer@zendesk.com"
    subdomain "example"

    after(:build) do |link_instance|
      # link_instance.owner ||= FactoryBot.build(:owner, link_instance: link_instance)
      # link_instance.id = link_instance.owner.link_instance_id
    end
  end
end
