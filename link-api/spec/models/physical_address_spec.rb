require 'rails_helper'

RSpec.describe PhysicalAddress, type: :model do
  it "is valid with address_1, city, state_province, postal_code, and country" do
    expect(FactoryBot.build(:physical_address)).to be_valid
  end

  it "is invalid without address_1" do
    physical_address = FactoryBot.build(:physical_address, address_1: nil)
    physical_address.valid?
    expect(physical_address.errors[:address_1]).to include("can't be blank")
  end
  
  it "is invalid without city" do
    physical_address = FactoryBot.build(:physical_address, city: nil)
    physical_address.valid?
    expect(physical_address.errors[:city]).to include("can't be blank")
  end

  it "is invalid without state_province" do
    physical_address = FactoryBot.build(:physical_address, state_province: nil)
    physical_address.valid?
    expect(physical_address.errors[:state_province]).to include("can't be blank")
  end

  it "is invalid without postal_code" do
    physical_address = FactoryBot.build(:physical_address, postal_code: nil)
    physical_address.valid?
    expect(physical_address.errors[:postal_code]).to include("can't be blank")
  end

  it "is invalid without country" do
    physical_address = FactoryBot.build(:physical_address, country: nil)
    physical_address.valid?
    expect(physical_address.errors[:country]).to include("can't be blank")
  end
end
