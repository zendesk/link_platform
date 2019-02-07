# frozen_string_literal: true

class Eligibility < ApplicationRecord
  belongs_to :link_instance
  belongs_to :service
end
