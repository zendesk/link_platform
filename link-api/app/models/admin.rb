class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable,
         :confirmable, :lockable, :timeoutable, :omniauthable

  belongs_to :link_instance

  validates :name, presence: true
  validates :email, presence: true, uniqueness: { scope: :link_instance }
end
