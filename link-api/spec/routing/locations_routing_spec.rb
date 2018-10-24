require "rails_helper"

RSpec.describe Api::LocationsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/api/locations").to route_to("api/locations#index")
    end


    it "routes to #show" do
      expect(:get => "/api/locations/1").to route_to("api/locations#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/api/locations").to route_to("api/locations#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/api/locations/1").to route_to("api/locations#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/api/locations/1").to route_to("api/locations#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/api/locations/1").to route_to("api/locations#destroy", :id => "1")
    end

  end
end
