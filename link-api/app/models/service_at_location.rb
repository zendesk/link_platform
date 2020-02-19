# frozen_string_literal: true

class ServiceAtLocation < ApplicationRecord
  belongs_to :link_instance
  belongs_to :service
  belongs_to :location

  accepts_nested_attributes_for :service
end
