require 'rails_helper'

RSpec.describe RegularSchedule, type: :model do
  let(:regular_schedule) { build(:regular_schedule) }

  describe 'weekday' do
    it 'is invalid when < 0' do
      regular_schedule.weekday = -1

      expect(regular_schedule.valid?).to eq false
      expect(regular_schedule.errors[:weekday]).to include 'must be greater than or equal to 0'
    end

    it 'is invalid when > 6' do
      regular_schedule.weekday = 7

      expect(regular_schedule.valid?).to eq false
      expect(regular_schedule.errors[:weekday]).to include 'must be less than 7'
    end
  end
end
