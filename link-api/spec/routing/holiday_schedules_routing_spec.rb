require "rails_helper"

RSpec.describe Api::HolidaySchedulesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/api/holiday_schedules").to route_to("api/holiday_schedules#index")
    end


    it "routes to #show" do
      expect(:get => "/api/holiday_schedules/1").to route_to("api/holiday_schedules#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/api/holiday_schedules").to route_to("api/holiday_schedules#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/api/holiday_schedules/1").to route_to("api/holiday_schedules#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/api/holiday_schedules/1").to route_to("api/holiday_schedules#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/api/holiday_schedules/1").to route_to("api/holiday_schedules#destroy", :id => "1")
    end

  end
end
