# frozen_string_literal: true

class Contact < ApplicationRecord
  belongs_to :link_instance
  belongs_to :organization, optional: true
  belongs_to :service, optional: true
  belongs_to :service_at_location, optional: true
end
