require 'rails_helper'

RSpec.describe Contact, type: :model do
  let(:contact) { Contact.new }

  it "has no required fields" do
    assert contact.save!
  end
end
