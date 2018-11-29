require 'rails_helper'

RSpec.describe Eligibility, type: :model do
  let(:link_instance) { create(:link_instance) }
  let(:eligibility) { Eligibility.new(link_instance: link_instance) }
  let(:broken_eligibility) { Eligibility.new }

  it "only requires a link_instance" do
    assert eligibility.save
  end

  it "fails without link_instance" do
    refute broken_eligibility.save
  end
end
