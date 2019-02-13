# frozen_string_literal: true

class Organization < ApplicationRecord
  belongs_to :link_instance

  validates :name, presence: true, uniqueness: { scope: :link_instance }
  validates :description, presence: true
end
