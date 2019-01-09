class Admin < ApplicationRecord
  belongs_to :link_instance

  validates :name, presence: true
  validates :email, presence: true, uniqueness: { scope: :link_instance }
end
