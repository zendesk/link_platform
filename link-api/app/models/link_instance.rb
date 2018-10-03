class LinkInstance < ApplicationRecord
  belongs_to :owner, class_name: "Admin", optional: true

  has_many :phones
  has_many :contacts
  has_many :service_at_locations
  has_many :services

  validates :name, presence: true
  validates :email, presence: true
  validates :subdomain, presence: true
  validates :owner, presence: true, on: :update
end
