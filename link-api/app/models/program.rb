# frozen_string_literal: true

class Program < ApplicationRecord
  belongs_to :link_instance
  belongs_to :organization
  belongs_to :location, optional: true

  validates :organization, presence: true
  validates :name, presence: true
end
