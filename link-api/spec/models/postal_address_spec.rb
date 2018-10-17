require 'rails_helper'

RSpec.describe PostalAddress, type: :model do
  it "is valid with address_1, city, state_province, postal_code, and country" do
    expect(FactoryBot.build(:postal_address)).to be_valid
  end

  it "is invalid without address_1" do
    postal_address = FactoryBot.build(:postal_address, address_1: nil)
    postal_address.valid?
    expect(postal_address.errors[:address_1]).to include("can't be blank")
  end

  it "is invalid without city" do
    postal_address = FactoryBot.build(:postal_address, city: nil)
    postal_address.valid?
    expect(postal_address.errors[:city]).to include("can't be blank")
  end

  it "is invalid without state_province" do
    postal_address = FactoryBot.build(:postal_address, state_province: nil)
    postal_address.valid?
    expect(postal_address.errors[:state_province]).to include("can't be blank")
  end

  it "is invalid without postal_code" do
    postal_address = FactoryBot.build(:postal_address, postal_code: nil)
    postal_address.valid?
    expect(postal_address.errors[:postal_code]).to include("can't be blank")
  end

  it "is invalid without country" do
    postal_address = FactoryBot.build(:postal_address, country: nil)
    postal_address.valid?
    expect(postal_address.errors[:country]).to include("can't be blank")
  end
end
