class LinkInstance < ApplicationRecord
  belongs_to :owner, class_name: "Admin", optional: true

  has_many :phones

  validates :name, presence: true
  validates :email, presence: true
  validates :subdomain, presence: true
  validates :owner, presence: true, on: :update

  property_set :settings do
    property :theme_color
    property :button_color
    property :feedback_email
    property :link_instance_id
  end

end
