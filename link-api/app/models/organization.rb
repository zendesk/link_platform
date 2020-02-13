# frozen_string_literal: true

class Organization < ApplicationRecord
  belongs_to :link_instance
  has_many :contacts
  has_many :locations
  has_many :programs
  has_many :services

  accepts_nested_attributes_for :contacts, allow_destroy: true
  accepts_nested_attributes_for :locations, allow_destroy: true
  accepts_nested_attributes_for :programs, allow_destroy: true
  accepts_nested_attributes_for :services, allow_destroy: true

  validates :name, presence: true, uniqueness: { scope: :link_instance }
  validates :description, presence: true
end
