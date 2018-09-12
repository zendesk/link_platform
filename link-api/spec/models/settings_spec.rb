require 'rails_helper'

RSpec.describe Settings, type: :model do
  let(:settings) { build(:settings) }

  context "with valid attributes" do
    it "saves" do
      assert settings.save!
    end
  end

  context "without a feedback email" do
    before { settings.feedback_email = nil }

    it "fails validations" do
      expect {
        settings.save!
      }.to raise_error(ActiveRecord::RecordInvalid)
    end
  end
end
