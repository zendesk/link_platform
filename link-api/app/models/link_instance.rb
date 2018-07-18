class LinkInstance < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true
  validates :subdomain, presence: true

end
