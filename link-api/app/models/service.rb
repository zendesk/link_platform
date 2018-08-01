class Service < ApplicationRecord
  belongs_to :organization
  belongs_to :program, optional: true

  validates :name, :status, presence: true
end
