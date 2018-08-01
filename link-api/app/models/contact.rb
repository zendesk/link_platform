class Contact < ApplicationRecord
  belongs_to :organization, optional: true
  # belongs_to :service # TODO: model doesn't exist yet
  # belongs_to :service_at_location # TODO: model doesn't exist yet
end
