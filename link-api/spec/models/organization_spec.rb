require 'rails_helper'

RSpec.describe Organization, type: :model do
  it "is valid with organization name, description, alternative_name, email, url, tax_status, tax_id, year_incorporated" do
    expect(FactoryBot.build(:organization)).to be_valid
  end

  it "is invalid without name" do
    org = FactoryBot.build(:organization, name:nil)
    org.valid?
    expect(org.errors[:name]).to include("can't be blank")
  end
  it "is invalid without description" do
    org = FactoryBot.build(:organization, description:nil)
    org.valid?
    expect(org.errors[:description]).to include("can't be blank")
  end

  it "is invalid with a duplicate name"
  it "is invalid with a location"
  it "is valid with a duplicate email address"
end

