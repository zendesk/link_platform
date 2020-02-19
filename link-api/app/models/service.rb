# frozen_string_literal: true

class Service < ApplicationRecord
  belongs_to :link_instance
  belongs_to :organization
  belongs_to :program, optional: true
  belongs_to :location, optional: true
  has_many :contacts
  has_many :eligibilities
  has_many :regular_schedules
  has_many :holiday_schedules
  has_many :languages
  has_many :phones
  has_many :locations, through: :service_at_locations

  accepts_nested_attributes_for :contacts, allow_destroy: true
  accepts_nested_attributes_for :eligibilities, allow_destroy: true
  accepts_nested_attributes_for :regular_schedules, allow_destroy: true
  accepts_nested_attributes_for :holiday_schedules, allow_destroy: true
  accepts_nested_attributes_for :languages, allow_destroy: true
  accepts_nested_attributes_for :phones, allow_destroy: true

  validates :name, :status, presence: true
end
