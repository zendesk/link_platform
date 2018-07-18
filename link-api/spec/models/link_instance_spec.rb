require 'rails_helper'

RSpec.describe LinkInstance, type: :model do
  it "is valid with name, email, and subdomain" do
    expect(FactoryBot.build(:link_instance)).to be_valid
  end

  it "is invalid without name" do
    org = FactoryBot.build(:link_instance, name:nil)
    org.valid?
    expect(org.errors[:name]).to include("can't be blank")
  end
  it "is invalid without email" do
    org = FactoryBot.build(:link_instance, email:nil)
    org.valid?
    expect(org.errors[:email]).to include("can't be blank")
  end
end
