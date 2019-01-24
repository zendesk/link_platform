class Program < ApplicationRecord
  belongs_to :link_instance
  belongs_to :organization

  validates :organization_id, presence: true
  validates :name, presence: true
end
