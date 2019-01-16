require 'rails_helper'

RSpec.describe Api::LocationsController, type: :controller do
  let(:link_instance) { create(:link_instance) }
  let(:location) { create(:location, link_instance: link_instance) }
  let(:admin) { create(:admin, link_instance: link_instance) }

  # This should return the minimal set of attributes required to create a valid
  # Location. As you add validations to Location, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    {
      name: 'Zendesk',
      description: 'Our home',
    }
  }

  let(:invalid_attributes) {
    {
      longitude: -181.01
    }
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # LocationsController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  before do
    allow_any_instance_of(ApplicationController).to receive(:current_link_instance).and_return(link_instance)
  end

  describe "GET #index" do
    it "returns a success response" do
      get :index, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "GET #show" do
    it "returns a success response" do
      get :show, params: {id: location.to_param}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "POST #create" do
    context "when not logged in" do
      it "returns unauthorized" do
        post :create, params: {location: valid_attributes}, session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context "when logged in to another instance" do
      it "returns not found" do
        login create(:admin)

        post :create, params: {location: valid_attributes}, session: valid_session
        expect(response).to have_http_status(404)
      end
    end

    context "when logged in" do
      before do
        login admin
      end

      context "with valid params" do
        it "creates a new Location" do
          expect {
            post :create, params: {location: valid_attributes}, session: valid_session
          }.to change(Location, :count).by(1)
        end

        it "renders a JSON response with the new location" do

          post :create, params: {location: valid_attributes}, session: valid_session
          expect(response).to have_http_status(:created)
          expect(response.content_type).to eq('application/json')
          expect(response.location).to eq(api_location_url(Location.last))
        end
      end

      context "with invalid params" do
        it "renders a JSON response with errors for the new location" do

          post :create, params: {location: invalid_attributes}, session: valid_session
          expect(response).to have_http_status(:unprocessable_entity)
          expect(response.content_type).to eq('application/json')
        end
      end
    end
  end

  describe "PUT #update" do
    let(:new_attributes) {
      {
        name: 'St Anthonys'
      }
    }

    context "when not logged in" do
      it "returns unauthorized" do
        put :update, params: {id: location.to_param, location: new_attributes}, session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context "when logged in" do
      before do
        login admin
      end

      context "with valid params" do
        it "updates the requested location" do
          put :update, params: {id: location.to_param, location: new_attributes}, session: valid_session
          location.reload
          expect(location.name).to eq('St Anthonys')
        end

        it "renders a JSON response with the location" do

          put :update, params: {id: location.to_param, location: valid_attributes}, session: valid_session
          expect(response).to have_http_status(:ok)
          expect(response.content_type).to eq('application/json')
        end
      end

      context "with invalid params" do
        it "renders a JSON response with errors for the location" do

          put :update, params: {id: location.to_param, location: invalid_attributes}, session: valid_session
          expect(response).to have_http_status(:unprocessable_entity)
          expect(response.content_type).to eq('application/json')
        end
      end
    end
  end

  describe "DELETE #destroy" do
    context "when not logged in" do
      it "returns unauthorized" do
        delete :destroy, params: {id: location.to_param}, session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context "when logged in" do
      before do
        login admin
      end

      it "destroys the requested location" do
        location.save!
        expect {
          delete :destroy, params: {id: location.to_param}, session: valid_session
        }.to change(Location, :count).by(-1)
      end
    end
  end
end
