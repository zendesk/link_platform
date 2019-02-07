# frozen_string_literal: true

class Language < ApplicationRecord
  include Iso639::Validator

  belongs_to :link_instance
  belongs_to :service, optional: true
  belongs_to :location, optional: true

  validates :language, iso639Code: true, length: { is: 2 }
end
