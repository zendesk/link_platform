# frozen_string_literal: true

FactoryBot.define do
  factory :language do
    link_instance
    service
    location
    language 'en'
  end
end
