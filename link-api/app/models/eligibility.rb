class Eligibility < ApplicationRecord
  belongs_to :link_instance
  belongs_to :service
end
