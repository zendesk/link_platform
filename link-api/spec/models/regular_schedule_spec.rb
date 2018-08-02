require 'rails_helper'

RSpec.describe RegularSchedule, type: :model do
  it "is valid with service_id, location_id, service_at_location_id, weekday, opens_at, and closes_at" do
    expect(FactoryBot.build(:regular_schedule)).to be_valid
  end

  it "is invalid without a weekday" do
    regular_schedule = FactoryBot.build(:regular_schedule, weekday: nil)
    regular_schedule.valid?
    expect(regular_schedule.errors[:weekday]).to include("can't be blank")
  end
end
