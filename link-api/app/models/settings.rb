class Settings < ApplicationRecord
  belongs_to :link_instance
  validates :feedback_email, presence: true
end
