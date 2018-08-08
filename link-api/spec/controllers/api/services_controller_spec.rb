require 'rails_helper'

RSpec.describe Api::ServicesController, type: :controller do
  let(:organization) { create(:organization) }

  # This should return the minimal set of attributes required to create a valid
  # Service. As you add validations to Service, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    {
      organization_id: organization.id,
      name: "Legal Help",
      status: "Open"
    }
  }

  let(:invalid_attributes) {
    {
      organization_id: nil,
      name: "Invalid"
    }
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # ServicesController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe "GET #index" do
    before { create(:service) }

    it "returns a success response" do
      get :index, params: {}, session: valid_session
      expect(response).to be_success
    end
  end

  describe "GET #show" do
    let(:service) { create(:service) }

    it "returns a success response" do
      get :show, params: {id: service.to_param}, session: valid_session
      expect(response).to be_success
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Service" do
        expect {
          post :create, params: {service: valid_attributes}, session: valid_session
        }.to change(Service, :count).by(1)
      end

      it "renders a JSON response with the new service" do

        post :create, params: {service: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
        expect(response.location).to eq(api_service_url(Service.last))
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the new service" do

        post :create, params: {service: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "PUT #update" do
    let(:service) { create(:service) }

    context "with valid params" do
      let(:new_attributes) {
        {
          name: "Helpful Things",
          status: "Closed"
        }
      }

      it "updates the requested service" do
        put :update, params: {id: service.to_param, service: new_attributes}, session: valid_session
        service.reload

        expect(service.name).to eq("Helpful Things")
        expect(service.status).to eq("Closed")
      end

      it "renders a JSON response with the service" do
        put :update, params: {id: service.to_param, service: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the service" do
        put :update, params: {id: service.to_param, service: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "DELETE #destroy" do
    let!(:service) { create(:service) }

    it "destroys the requested service" do
      expect {
        delete :destroy, params: {id: service.to_param}, session: valid_session
      }.to change(Service, :count).by(-1)
    end
  end

end
