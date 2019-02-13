# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Service, type: :model do
  let(:service) { build(:service) }

  context 'with valid attributes' do
    it 'saves' do
      assert service.save!
    end
  end

  context 'without an organization' do
    before { service.organization_id = nil }

    it 'fails validations' do
      expect do
        service.save!
      end.to raise_error(ActiveRecord::RecordInvalid)
    end
  end

  context 'without a name' do
    before { service.name = nil }

    it 'fails validations' do
      expect do
        service.save!
      end.to raise_error(ActiveRecord::RecordInvalid)
    end
  end

  context 'without a status' do
    before { service.status = nil }

    it 'fails validations' do
      expect do
        service.save!
      end.to raise_error(ActiveRecord::RecordInvalid)
    end
  end
end
