# frozen_string_literal: true

FactoryBot.define do
  factory :admin, aliases: [:owner] do
    name 'Admin Adam'
    email
    password '1234abcd'
    link_instance
  end

  sequence :email do |n|
    "admin_#{n}@example.com"
  end
end
