require 'rails_helper'

RSpec.describe "ServiceAtLocations", type: :request do
  describe "GET /service_at_locations" do
    it "works! (now write some real specs)" do
      get service_at_locations_path
      expect(response).to have_http_status(200)
    end
  end
end
