require 'rails_helper'

RSpec.describe Phone, type: :model do
  let!(:phone) { Phone.new }
  
  it "does not have any required fields" do
    assert(phone.save!)
  end
end
