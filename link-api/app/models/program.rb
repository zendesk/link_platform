# frozen_string_literal: true

class Program < ApplicationRecord
  belongs_to :link_instance
  belongs_to :organization

  validates :organization, presence: true
  validates :name, presence: true
end
