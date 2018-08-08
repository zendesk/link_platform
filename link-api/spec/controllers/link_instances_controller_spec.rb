require 'rails_helper'

RSpec.describe LinkInstancesController, type: :controller do

  # This should return the minimal set of attributes required to create a valid
  # LinkInstance. As you add validations to LinkInstance, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    {
      name: "LinkSF",
      email: "example@zendesk.com",
      subdomain: "example"
    }
  }

  let(:invalid_attributes) {
    {
      name: "Invalid"
      email: nil
    }
  }
  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # LinkInstancesController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe "GET #index" do
    before { create(:link_instance) }

    it "returns a success response" do
      link_instance = LinkInstance.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(response).to be_success
    end
  end

  describe "GET #show" do
    let (:link_instance) { create(:link_instance) }
    it "returns a success response" do
      link_instance = LinkInstance.create! valid_attributes
      get :show, params: {id: link_instance.to_param}, session: valid_session
      expect(response).to be_success
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new LinkInstance" do
        expect {
          post :create, params: {link_instance: valid_attributes}, session: valid_session
        }.to change(LinkInstance, :count).by(1)
      end

      it "renders a JSON response with the new link_instance" do

        post :create, params: {link_instance: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
        expect(response.location).to eq(link_instance_url(LinkInstance.last))
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the new link_instance" do

        post :create, params: {link_instance: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "PUT #update" do
    let(:link_instance) { create(:link_instance) }
    context "with valid params" do
      let(:new_attributes) {
        {
          name: "New Name",
          email: "someone@zendesk.com"
        }
      }

      it "updates the requested link_instance" do
        put :update, params: {id: link_instance.to_param, link_instance: new_attributes}, session: valid_session
        link_instance.reload

        expect(link_instance.name).to eq("New Name")
      end

      it "renders a JSON response with the link_instance" do

        put :update, params: {id: link_instance.to_param, link_instance: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the link_instance" do

        put :update, params: {id: link_instance.to_param, link_instance: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "DELETE #destroy" do
    let!(:link_instance) { create(:link_instance) }
    it "destroys the requested link_instance" do
      expect {
        delete :destroy, params: {id: link_instance.to_param}, session: valid_session
      }.to change(LinkInstance, :count).by(-1)
    end
  end

end
