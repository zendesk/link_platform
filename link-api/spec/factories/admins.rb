FactoryBot.define do
  factory :admin, aliases: [:owner] do
    name "Admin Adam"
    email
    link_instance
  end

  sequence :email do |n|
    "admin_#{n}@example.com"
  end
end
