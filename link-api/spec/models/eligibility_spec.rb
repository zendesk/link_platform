# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Eligibility, type: :model do
  let(:link_instance) { create(:link_instance) }
  let(:service) { create(:service, link_instance: link_instance) }

  let(:eligibility) do
    Eligibility.new(link_instance: link_instance, service: service)
  end

  let(:broken_eligibility) { Eligibility.new }

  it 'requires a link_instance and service' do
    assert eligibility.save
  end

  it 'fails without link_instance or service' do
    refute broken_eligibility.save
  end
end
