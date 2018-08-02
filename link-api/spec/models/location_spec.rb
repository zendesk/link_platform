require 'rails_helper'

RSpec.describe Location, type: :model do
  let!(:location) { Location.new }
  
  it "is valid without any fields" do
    assert(location.save!)
  end
end
