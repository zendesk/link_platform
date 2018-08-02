class RegularSchedule < ApplicationRecord
  belongs_to :service, optional: true
  belongs_to :location, optional: true
  belongs_to :service_at_location, optional: true
  
  validates :weekday, presence: true
end
