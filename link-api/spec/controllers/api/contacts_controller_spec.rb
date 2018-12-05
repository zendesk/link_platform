require 'rails_helper'

RSpec.describe Api::ContactsController, type: :controller do
  let(:link_instance) { create(:link_instance) }
  let(:contact) { create(:contact, link_instance: link_instance) }
  let(:admin) { create(:admin, link_instance: link_instance) }

  # This should return the minimal set of attributes required to create a valid
  # Contact. As you add validations to Contact, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    {
      name: "Jennifer Hanson"
    }
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # ContactsController. Be sure to keep this updated too.
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
      get :show, params: {id: contact.to_param}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "POST #create" do
    context "when not logged in" do
      it "redirects to login" do
        post :create, params: {contact: valid_attributes}, session: valid_session
        expect(response).to have_http_status(302)
      end
    end

    context "when logged in to another instance" do
      it "returns not found" do
        sign_in create(:admin)

        post :create, params: {contact: valid_attributes}, session: valid_session
        expect(response).to have_http_status(404)
      end
    end

    context "when logged in" do
      before do
        sign_in admin
      end

      context "with valid params" do
        it "creates a new Contact" do
          expect {
            post :create, params: {contact: valid_attributes}, session: valid_session
          }.to change(Contact, :count).by(1)
        end

        it "renders a JSON response with the new contact" do
          post :create, params: {contact: valid_attributes}, session: valid_session
          expect(response).to have_http_status(:created)
          expect(response.content_type).to eq('application/json')
          expect(response.location).to eq(api_contact_url(Contact.last))
        end
      end
    end
  end

  describe "PUT #update" do
    let(:new_attributes) {
      {
        name: "Testing",
        title: "Fancy Title"
      }
    }

    context "when not logged in" do
      it "redirects to login" do
        put :update, params: {id: contact.to_param, contact: new_attributes}, session: valid_session
        expect(response).to have_http_status(302)
      end
    end

    context "when logged in" do
      before do
        sign_in admin
      end

      context "with valid params" do
        it "updates the requested contact" do
          put :update, params: {id: contact.to_param, contact: new_attributes}, session: valid_session
          contact.reload

          expect(contact.name).to eq("Testing")
          expect(contact.title).to eq("Fancy Title")
        end

        it "renders a JSON response with the contact" do
          put :update, params: {id: contact.to_param, contact: valid_attributes}, session: valid_session
          expect(response).to have_http_status(:ok)
          expect(response.content_type).to eq('application/json')
        end
      end
    end
  end

  describe "DELETE #destroy" do
    context "when not logged in" do
      it "redirects to login" do
        delete :destroy, params: {id: contact.to_param}, session: valid_session
        expect(response).to have_http_status(302)
      end
    end

    context "when logged in" do
      before do
        sign_in admin
      end

      it "destroys the requested contact" do
        contact.save!
        expect {
          delete :destroy, params: {id: contact.to_param}, session: valid_session
        }.to change(Contact, :count).by(-1)
      end
    end
  end
end
