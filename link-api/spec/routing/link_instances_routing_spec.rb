require "rails_helper"

RSpec.describe LinkInstancesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/link_instances").to route_to("link_instances#index")
    end


    it "routes to #show" do
      expect(:get => "/link_instances/1").to route_to("link_instances#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/link_instances").to route_to("link_instances#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/link_instances/1").to route_to("link_instances#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/link_instances/1").to route_to("link_instances#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/link_instances/1").to route_to("link_instances#destroy", :id => "1")
    end

  end
end
