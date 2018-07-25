require 'rails_helper'

RSpec.describe Location, type: :model do
  it "is valid without any fields" do
    expect(FactoryBot.build(:location)).to be_valid
  end
end