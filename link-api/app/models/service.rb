# frozen_string_literal: true

class Service < ApplicationRecord
  belongs_to :link_instance
  belongs_to :organization
  belongs_to :program, optional: true
  has_many :contacts
  has_many :regular_schedules
  has_many :holiday_schedules
  has_many :languages
  has_many :phones

  accepts_nested_attributes_for :contacts, allow_destroy: true

  validates :name, :status, presence: true
end
