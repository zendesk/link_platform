class Organization < ApplicationRecord
  # We need to add these uniqueness validation but can't until the link_platform model is built
  validates :name, presence: true #, uniqueness: { scope: :link_platform, message: "should happen once per year" }
  validates :description, presence: true #, uniqueness: { scope: :link_platform, message: "should happen once per year" }
end
