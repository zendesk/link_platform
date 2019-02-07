# frozen_string_literal: true

class RegularSchedule < ApplicationRecord
  belongs_to :link_instance
  belongs_to :service, optional: true
  belongs_to :location, optional: true
  belongs_to :service_at_location, optional: true

  validates :weekday,
            presence: true,
            numericality: {
              only_integer: true,
              greater_than_or_equal_to: 0,
              less_than: 7
            }
end
