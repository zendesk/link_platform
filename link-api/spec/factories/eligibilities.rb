# frozen_string_literal: true

FactoryBot.define do
  factory :eligibility do
    link_instance
    service
    eligibility 'Women'
  end
end
