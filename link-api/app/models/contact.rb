class Contact < ApplicationRecord
  belongs_to :organization, optional: true
  belongs_to :service, optional: true
  belongs_to :service_at_location, optional: true
end
