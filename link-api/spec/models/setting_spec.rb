require 'rails_helper'

RSpec.describe Setting, type: :model do
  let(:setting) { build(:setting) }

  context "with valid attributes" do
    it "saves" do
      assert setting.save!
    end
  end

  context "without a feedback email" do
    before { setting.feedback_email = nil }

    it "fails validations" do
      expect {
        setting.save!
      }.to raise_error(ActiveRecord::RecordInvalid)
    end
  end

end
