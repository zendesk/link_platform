require 'rails_helper'

RSpec.describe Api::ServiceAtLocationsController, type: :controller do
  let(:link_instance) { create(:link_instance) }
  let(:service_at_location) { create(:service_at_location, link_instance: link_instance) }
  let(:service) { create(:service) }
  let(:location) { create(:location) }
  let(:admin) { create(:admin, link_instance: link_instance) }

  # This should return the minimal set of attributes required to create a valid
  # ServiceAtLocation. As you add validations to ServiceAtLocation, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    {
      service_id: service.id,
      location_id: location.id
    }
  }

  let(:invalid_attributes) {
    {
      service_id: nil,
      location_id: nil
    }
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # ServiceAtLocationsController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  before do
    allow_any_instance_of(ApplicationController).to receive(:current_link_instance).and_return(link_instance)
  end

  describe "GET #index" do
    before { create(:service_at_location, link_instance: link_instance) }

    it "returns a success response" do
      get :index, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "GET #show" do
    it "returns a success response" do
      get :show, params: {id: service_at_location.to_param}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "POST #create" do
    context "when not logged in" do
      it "returns unauthorized" do
        post :create, params: {service_at_location: valid_attributes}, session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context "when logged in to another instance" do
      it "returns not found" do
        login create(:admin)

        post :create, params: {service_at_location: valid_attributes}, session: valid_session
        expect(response).to have_http_status(404)
      end
    end

    context "when logged in" do
      before do
        login admin
      end

      context "with valid params" do
        it "creates a new ServiceAtLocation" do
          expect {
            post :create, params: {service_at_location: valid_attributes}, session: valid_session
          }.to change(ServiceAtLocation, :count).by(1)
        end

        it "renders a JSON response with the new service_at_location" do

          post :create, params: {service_at_location: valid_attributes}, session: valid_session
          expect(response).to have_http_status(:created)
          expect(response.content_type).to eq('application/json')
          expect(response.location).to eq(api_service_at_location_url(ServiceAtLocation.last))
        end
      end

      context "with invalid params" do
        it "renders a JSON response with errors for the new service_at_location" do

          post :create, params: {service_at_location: invalid_attributes}, session: valid_session
          expect(response).to have_http_status(:unprocessable_entity)
          expect(response.content_type).to eq('application/json')
        end
      end
    end
  end

  describe "PUT #update" do
    let(:new_attributes) {
      {
        description: "Helpful!"
      }
    }

    context "when not logged in" do
      it "returns unauthorized" do
        put :update, params: {id: service_at_location.to_param, service_at_location: new_attributes}, session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context "when logged in" do
      before do
        login admin
      end

      context "with valid params" do
        it "updates the requested service_at_location" do
          put :update, params: {id: service_at_location.to_param, service_at_location: new_attributes}, session: valid_session
          service_at_location.reload

          expect(service_at_location.description).to eq("Helpful!")
        end

        it "renders a JSON response with the service_at_location" do
          put :update, params: {id: service_at_location.to_param, service_at_location: valid_attributes}, session: valid_session
          expect(response).to have_http_status(:ok)
          expect(response.content_type).to eq('application/json')
        end
      end

      context "with invalid params" do
        it "renders a JSON response with errors for the service_at_location" do
          put :update, params: {id: service_at_location.to_param, service_at_location: invalid_attributes}, session: valid_session
          expect(response).to have_http_status(:unprocessable_entity)
          expect(response.content_type).to eq('application/json')
        end
      end
    end
  end

  describe "DELETE #destroy" do
    context "when not logged in" do
      it "returns unauthorized" do
        delete :destroy, params: {id: service_at_location.to_param}, session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context "when logged in" do
      before do
        login admin
      end

      it "destroys the requested service_at_location" do
        service_at_location.save!
        expect {
          delete :destroy, params: {id: service_at_location.to_param}, session: valid_session
        }.to change(ServiceAtLocation, :count).by(-1)
      end
    end
  end
end
