require 'rails_helper'

RSpec.describe Contact, type: :model do
  let(:link_instance) { create(:link_instance) }
  let(:contact) { Contact.new(link_instance: link_instance) }

  it "only requires a link_instance" do
    assert contact.save
  end
end
