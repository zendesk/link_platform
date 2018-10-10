require "rails_helper"

RSpec.describe Api::PostalAddressesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/api/postal_addresses").to route_to("api/postal_addresses#index")
    end


    it "routes to #show" do
      expect(:get => "/api/postal_addresses/1").to route_to("api/postal_addresses#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/api/postal_addresses").to route_to("api/postal_addresses#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/api/postal_addresses/1").to route_to("api/postal_addresses#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/api/postal_addresses/1").to route_to("api/postal_addresses#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/api/postal_addresses/1").to route_to("api/postal_addresses#destroy", :id => "1")
    end

  end
end
