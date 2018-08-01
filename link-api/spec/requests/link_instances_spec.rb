require 'rails_helper'

RSpec.describe "LinkInstances", type: :request do
  describe "GET /link_instances" do
    it "works! (now write some real specs)" do
      get link_instances_path
      expect(response).to have_http_status(200)
    end
  end
end
