require 'rails_helper'

RSpec.describe Phone, type: :model do
  it "is valid with all possible fields" do
    expect(FactoryBot.build(:phone)).to be_valid
  end

  it "is invalid without a link_instance" do
    phone = FactoryBot.build(:phone, link_instance: nil)
    phone.valid?
    expect(phone.errors[:link_instance]).to include("must exist")
  end

  it "is invalid without a phone number" do
    phone = FactoryBot.build(:phone, number: nil)
    phone.valid?
    expect(phone.errors[:number]).to include("can't be blank")
  end

  describe "phone types" do
    Phone::PHONE_TYPES.each do |type|
      it "is valid with type #{type}" do
        expect(FactoryBot.build(:phone, phone_type: type)).to be_valid
      end
    end

    it "is invalid with a random type" do
      phone = FactoryBot.build(:phone, phone_type: "cat")
      phone.valid?
      expect(phone.errors[:phone_type]).to include("is not a valid type")
    end
  end

  it "is invalid with non ISO639 language code" do
    phone = FactoryBot.build(:phone, language: "dog")
    phone.valid?
    expect(phone.errors[:language]).to include("is invalid")
  end
end
