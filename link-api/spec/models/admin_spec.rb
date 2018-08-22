require 'rails_helper'

RSpec.describe Admin, type: :model do
  describe "Validations" do
    it "is valid with a name, email, and password" do
      expect(FactoryBot.build(:admin)).to be_valid
    end

    it "is invalid without a name" do
      admin = FactoryBot.build(:admin, name: nil)
      admin.valid?
      expect(admin.errors[:name]).to include("can't be blank")
    end

    describe "Email validation" do
      it "is invalid without an email" do
        admin = FactoryBot.build(:admin, email: nil)
        admin.valid?
        expect(admin.errors[:email]).to include("can't be blank")
      end

      it "doesn't allow duplicate emails within link_instances" do
        a1 = FactoryBot.create(:admin)
        a2 = FactoryBot.build(:admin, link_instance_id: a1.link_instance_id)

        a2.valid?
        expect(a2.errors[:email]).to include("has already been taken")
      end

      it "allows duplicate emails across link_instances" do
        FactoryBot.create(:admin)
        expect(FactoryBot.build(:admin)).to be_valid
      end
    end
  end
end
