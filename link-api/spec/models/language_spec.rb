require 'rails_helper'

RSpec.describe Language, type: :model do
  it "is valid with all possible fields" do
    expect(FactoryBot.build(:language)).to be_valid
  end

  it "is invalid without a link_instance" do
    language = FactoryBot.build(:language, link_instance: nil)
    expect(language.valid?).to eq false
    expect(language.errors[:link_instance]).to include("must exist")
  end
end
