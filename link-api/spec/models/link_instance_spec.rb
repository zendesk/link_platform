require 'rails_helper'

RSpec.describe LinkInstance, type: :model do
  describe "Validations" do
    it "is valid with name, email, and subdomain" do
      expect(build(:link_instance)).to be_valid
    end

    it "is invalid without name" do
      instance = build(:link_instance, name: nil)
      instance.valid?
      expect(instance.errors[:name]).to include("can't be blank")
    end

    it "is invalid without email" do
      instance = build(:link_instance, email: nil)
      instance.valid?
      expect(instance.errors[:email]).to include("can't be blank")
    end

    it "is invlaid with a duplicate subdomain" do
      i = create(:link_instance)
      instance = build(:link_instance, subdomain: i.subdomain)
      instance.valid?
      expect(instance.errors[:subdomain]).to include("has already been taken")
    end

    describe "Owner validations" do
      it "is invalid on update with no owner" do
        instance = create(:link_instance)
        instance.owner = nil
        instance.valid?
        expect(instance.errors[:owner]).to include("can't be blank")
      end
    end
  end
end
