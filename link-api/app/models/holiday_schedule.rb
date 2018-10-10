class HolidaySchedule < ApplicationRecord
  belongs_to :link_instance
  belongs_to :service, optional: true
  belongs_to :location, optional: true
  belongs_to :service_at_location, optional: true

  validates :closed, inclusion: { in: [true, false] }
  validates :start_date, presence: true
  validates :end_date, presence: true
end
