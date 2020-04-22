# frozen_string_literal: true

class Location < ApplicationRecord
  belongs_to :link_instance
  belongs_to :organization, optional: true
  has_many :regular_schedules
  has_many :holiday_schedules
  has_many :languages
  has_many :service_at_locations
  has_many :services, through: :service_at_locations
  has_many :phones
  has_many :physical_addresses
  has_many :postal_addresses

  accepts_nested_attributes_for :regular_schedules, allow_destroy: true
  accepts_nested_attributes_for :holiday_schedules, allow_destroy: true
  accepts_nested_attributes_for :languages, allow_destroy: true
  accepts_nested_attributes_for :services
  accepts_nested_attributes_for :phones, allow_destroy: true
  accepts_nested_attributes_for :physical_addresses, allow_destroy: true
  accepts_nested_attributes_for :postal_addresses, allow_destroy: true

  validate :latitude_longitude_validation

  LAT_LONG_REGEX = /\A\d+\.\d+\z/.freeze

  private

  def latitude_longitude_validation
    errors.add(:latitude, 'value is invalid') unless valid_coords?(latitude)
    errors.add(:longitude, 'value is invalid') unless valid_coords?(longitude)
  end

  def valid_coords?(item)
    return true unless item

    LAT_LONG_REGEX.match?(item.to_s) && (-180..180).cover?(item.to_f)
  end
end
