require 'rails_helper'

RSpec.describe RegularSchedule, type: :model do
  let(:regular_schedule) { build(:regular_schedule) }

  describe 'weekday' do
    (0..6).each do |weekday|
      it "`#{weekday}` is valid" do
        regular_schedule.weekday = weekday

        expect(regular_schedule.valid?).to eq true
      end
    end

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
