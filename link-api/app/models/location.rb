class Location < ApplicationRecord
  belongs_to :organization, optional: true
end
