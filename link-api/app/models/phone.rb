class Phone < ApplicationRecord
  belongs_to :location, optional: true
  belongs_to :service, optional: true
  belongs_to :organization, optional: true
  belongs_to :contact, optional: true
  belongs_to :service_at_location, optional: true
end
