require "rails_helper"

RSpec.describe ServiceAtLocationsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/service_at_locations").to route_to("service_at_locations#index")
    end


    it "routes to #show" do
      expect(:get => "/service_at_locations/1").to route_to("service_at_locations#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/service_at_locations").to route_to("service_at_locations#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/service_at_locations/1").to route_to("service_at_locations#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/service_at_locations/1").to route_to("service_at_locations#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/service_at_locations/1").to route_to("service_at_locations#destroy", :id => "1")
    end

  end
end
