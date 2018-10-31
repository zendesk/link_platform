require "rails_helper"

RSpec.describe Api::OrganizationsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/api/organizations").to route_to("api/organizations#index")
    end


    it "routes to #show" do
      expect(:get => "/api/organizations/1").to route_to("api/organizations#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/api/organizations").to route_to("api/organizations#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/api/organizations/1").to route_to("api/organizations#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/api/organizations/1").to route_to("api/organizations#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/api/organizations/1").to route_to("api/organizations#destroy", :id => "1")
    end

  end
end
