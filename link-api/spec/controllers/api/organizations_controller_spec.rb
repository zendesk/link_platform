require 'rails_helper'

RSpec.describe Api::OrganizationsController, type: :controller do
  let(:link_instance) { create(:link_instance) }
  let(:organization) { create(:organization, link_instance: link_instance) }
  let(:admin) { create(:admin, link_instance: link_instance) }

  # This should return the minimal set of attributes required to create a valid
  # Organization. As you add validations to Organization, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    {
      name: 'Zendesk Organization',
      alternate_name: 'ZD Org',
      description: 'Home of LinkSF' 
    }
  }

  let(:invalid_attributes) {
    {
      bubblegum: 'sticks'
    }
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # OrganizationsController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  before do
    login admin
    allow_any_instance_of(ApplicationController).to receive(:current_link_instance).and_return(link_instance)
  end

  describe "GET #index" do
    it "returns a success response" do
      get :index, params: {}, session: valid_session
      expect(response).to be_success
    end
  end

  describe "GET #show" do
    it "returns a success response" do
      get :show, params: {id: organization.to_param}, session: valid_session
      expect(response).to be_success
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Organization" do
        expect {
          post :create, params: {organization: valid_attributes}, session: valid_session
        }.to change(Organization, :count).by(1)
      end

      it "renders a JSON response with the new organization" do

        post :create, params: {organization: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
        expect(response.location).to eq(api_organization_url(Organization.last))
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the new organization" do

        post :create, params: {organization: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        {
          name: 'Canonball'
        }
      }

      it "updates the requested organization" do
        put :update, params: {id: organization.to_param, organization: new_attributes}, session: valid_session
        organization.reload
        expect(organization.name).to eq('Canonball')
      end

      it "renders a JSON response with the organization" do

        put :update, params: {id: organization.to_param, organization: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "DELETE #destroy" do
    before do
      login admin
    end

    it "destroys the requested organization" do
      organization.save!
      expect {
        delete :destroy, params: {id: organization.to_param}, session: valid_session
      }.to change(Organization, :count).by(-1)
    end
  end

end
