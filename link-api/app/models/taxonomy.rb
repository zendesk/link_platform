# frozen_string_literal: true

class Taxonomy < ApplicationRecord
  belongs_to :link_instance

  validates :name, presence: true
end
