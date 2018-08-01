require 'rails_helper'

RSpec.describe LinkInstancesController, type: :controller do

  # This should return the minimal set of attributes required to create a valid
  # LinkInstance. As you add validations to LinkInstance, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # LinkInstancesController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe "GET #index" do
    it "returns a success response" do
      link_instance = LinkInstance.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(response).to be_success
    end
  end

  describe "GET #show" do
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
    context "with valid params" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested link_instance" do
        link_instance = LinkInstance.create! valid_attributes
        put :update, params: {id: link_instance.to_param, link_instance: new_attributes}, session: valid_session
        link_instance.reload
        skip("Add assertions for updated state")
      end

      it "renders a JSON response with the link_instance" do
        link_instance = LinkInstance.create! valid_attributes

        put :update, params: {id: link_instance.to_param, link_instance: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the link_instance" do
        link_instance = LinkInstance.create! valid_attributes

        put :update, params: {id: link_instance.to_param, link_instance: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested link_instance" do
      link_instance = LinkInstance.create! valid_attributes
      expect {
        delete :destroy, params: {id: link_instance.to_param}, session: valid_session
      }.to change(LinkInstance, :count).by(-1)
    end
  end

end
