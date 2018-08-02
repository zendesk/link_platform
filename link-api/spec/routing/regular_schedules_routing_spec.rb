require "rails_helper"

RSpec.describe RegularSchedulesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/regular_schedules").to route_to("regular_schedules#index")
    end


    it "routes to #show" do
      expect(:get => "/regular_schedules/1").to route_to("regular_schedules#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/regular_schedules").to route_to("regular_schedules#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/regular_schedules/1").to route_to("regular_schedules#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/regular_schedules/1").to route_to("regular_schedules#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/regular_schedules/1").to route_to("regular_schedules#destroy", :id => "1")
    end

  end
end
