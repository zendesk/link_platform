require 'rails_helper'

RSpec.describe HolidaySchedule, type: :model do
  let(:holiday_schedule) { build(:holiday_schedule) }

  describe '#closed' do
    it 'is required' do
      holiday_schedule.closed = nil

      expect(holiday_schedule.valid?).to eq(false)
      expect(holiday_schedule.errors[:closed]).to include('is not included in the list')
    end
  end

  describe '#start_date' do
    it 'is required' do
      holiday_schedule.start_date = nil

      expect(holiday_schedule.valid?).to eq(false)
      expect(holiday_schedule.errors[:start_date]).to include("can't be blank")
    end
  end

  describe '#end_date' do
    it 'is required' do
      holiday_schedule.end_date = nil

      expect(holiday_schedule.valid?).to eq(false)
      expect(holiday_schedule.errors[:end_date]).to include("can't be blank")
    end
  end
end
