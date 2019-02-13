# frozen_string_literal: true

class Phone < ApplicationRecord
  include Iso639::Validator

  PHONE_TYPES = %w[text voice fax cell video pager textphone].freeze

  belongs_to :link_instance
  belongs_to :location, optional: true
  belongs_to :service, optional: true
  belongs_to :organization, optional: true
  belongs_to :contact, optional: true
  belongs_to :service_at_location, optional: true

  validates :number, presence: true
  validates :phone_type, inclusion: {
    in: PHONE_TYPES,
    message: 'is not a valid type'
  }

  validates :language, iso639Code: true, length: { is: 3 }
end
