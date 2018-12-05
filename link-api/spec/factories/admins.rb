FactoryBot.define do
  factory :admin, aliases: [:owner] do
    name "Admin Adam"
    email
    password "123abc"
    encrypted_password Devise::Encryptor.digest(Admin, "123abc")
    link_instance
    confirmed_at Time.now
  end

  sequence :email do |n|
    "admin_#{n}@example.com"
  end
end
