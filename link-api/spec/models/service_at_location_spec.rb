require 'rails_helper'

RSpec.describe ServiceAtLocation, type: :model do
  let(:service_at_location) { build(:service_at_location) }

  context "with valid attributes" do
    it "saves" do
      assert service_at_location.save!
    end
  end

  context "without a service" do
    before { service_at_location.service_id = nil }

    it "fails validations" do
      expect {
        service_at_location.save!
      }.to raise_error(ActiveRecord::RecordInvalid)
    end
  end

  context "without a location" do
    before { service_at_location.location_id = nil }

    it "fails validations" do
      expect {
        service_at_location.save!
      }.to raise_error(ActiveRecord::RecordInvalid)
    end
  end

end
