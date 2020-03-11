# frozen_string_literal: true

class ServiceAtLocation < ApplicationRecord
  belongs_to :link_instance
  belongs_to :service
  belongs_to :location

  before_validation :inherit_link_instance

  private

  def inherit_link_instance
    self.link_instance_id = service.link_instance_id
  end
end
