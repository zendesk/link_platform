require 'rails_helper'

RSpec.describe Program, type: :model do
  it "is valid with all fields present" do
    expect(FactoryBot.build(:program)).to be_valid
  end

  it "is invalid without an organization" do
    program = FactoryBot.build(:program, organization_id: nil)
    program.valid?
    expect(program.errors[:organization_id]).to include("can't be blank")
  end

  it "is invalid without a name" do
    program = FactoryBot.build(:program, name: nil)
    program.valid?
    expect(program.errors[:name]).to include("can't be blank")
  end
end
