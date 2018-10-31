class Organization < ApplicationRecord
  belongs_to :link_instance

  validates :name, presence: true, uniqueness: { scope: :link_instance, message: "should happen once per year" }
  validates :description, presence: true, uniqueness: { scope: :link_instance, message: "should happen once per year" }
end
