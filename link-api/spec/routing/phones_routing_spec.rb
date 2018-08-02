require "rails_helper"

RSpec.describe PhonesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/phones").to route_to("phones#index")
    end


    it "routes to #show" do
      expect(:get => "/phones/1").to route_to("phones#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/phones").to route_to("phones#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/phones/1").to route_to("phones#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/phones/1").to route_to("phones#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/phones/1").to route_to("phones#destroy", :id => "1")
    end

  end
end
