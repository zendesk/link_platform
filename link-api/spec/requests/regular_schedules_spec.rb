require 'rails_helper'

RSpec.describe "RegularSchedules", type: :request do
  describe "GET /regular_schedules" do
    it "works! (now write some real specs)" do
      get regular_schedules_path
      expect(response).to have_http_status(200)
    end
  end
end
