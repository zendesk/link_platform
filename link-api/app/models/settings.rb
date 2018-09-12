class Settings < ApplicationRecord
  belongs_to :link_instance
  validates :feedback_email, :status, presence: true
end
