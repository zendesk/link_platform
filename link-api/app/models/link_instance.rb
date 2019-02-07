# frozen_string_literal: true

class LinkInstance < ApplicationRecord
  belongs_to :owner, class_name: 'Admin', optional: true

  has_many :contacts
  has_many :locations
  has_many :phones
  has_many :contacts
  has_many :service_at_locations
  has_many :services
  has_many :holiday_schedules
  has_many :languages
  has_many :postal_addresses
  has_many :physical_addresses
  has_many :programs
  has_many :organizations
  has_many :regular_schedules

  validates :name, presence: true
  validates :email, presence: true
  validates :subdomain, presence: true, uniqueness: true
  validates :owner, presence: true, on: :update

  property_set :settings do
    property :theme_color, default: '#f8f8f8'
    property :button_color, default: '#007aff'
    property :feedback_email
  end
end
