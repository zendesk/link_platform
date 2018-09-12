require 'rails_helper'

RSpec.describe LinkInstance, type: :model do
  describe "Validations" do
    it "is valid with name, email, and subdomain" do
      expect(FactoryBot.build(:link_instance)).to be_valid
    end

    it "is invalid without name" do
      org = FactoryBot.build(:link_instance, name: nil)
      org.valid?
      expect(org.errors[:name]).to include("can't be blank")
    end

    it "is invalid without email" do
      org = FactoryBot.build(:link_instance, email: nil)
      org.valid?
      expect(org.errors[:email]).to include("can't be blank")
    end

    describe "Owner validations" do
      it "is invalid on update with no owner" do
        instance = FactoryBot.create(:link_instance)
        instance.owner = nil
        instance.valid?
        expect(instance.errors[:owner]).to include("can't be blank")
      end
    end
  end
end
