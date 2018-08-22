FactoryBot.define do
  factory :admin do
    name "Admin Adam"
    email "adminadam@example.com"
    password "123abc"
    encrypted_password Devise::Encryptor.digest(Admin, "123abc")
    link_instance
  end

  factory :owner, class: Admin do
    name "Owner Man"
    email "ownerman@example.com"
    password "123xyz"
    encrypted_password Devise::Encryptor.digest(Admin, "123xyz")
    link_instance
  end
end
