# frozen_string_literal: true

class Location < ApplicationRecord
  belongs_to :link_instance
  belongs_to :organization, optional: true

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
