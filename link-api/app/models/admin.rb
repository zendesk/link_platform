class Admin < ApplicationRecord
  include DeviseTokenAuth::Concerns::User

  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable

  belongs_to :link_instance

  validates :name, presence: true
  validates :email, presence: true, uniqueness: { scope: :link_instance }
end
