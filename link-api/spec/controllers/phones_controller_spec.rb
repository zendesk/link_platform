require 'rails_helper'

RSpec.describe PhonesController, type: :controller do

  # This should return the minimal set of attributes required to create a valid
  # Phone. As you add validations to Phone, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    { number: "1234567890" }
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # PhonesController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe "GET #index" do
    it "returns a success response" do
      phone = Phone.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(response).to be_success
    end
  end

  describe "GET #show" do
    it "returns a success response" do
      phone = Phone.create! valid_attributes
      get :show, params: {id: phone.to_param}, session: valid_session
      expect(response).to be_success
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Phone" do
        expect {
          post :create, params: {phone: valid_attributes}, session: valid_session
        }.to change(Phone, :count).by(1)
      end

      it "renders a JSON response with the new phone" do

        post :create, params: {phone: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
        expect(response.location).to eq(phone_url(Phone.last))
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        { number: "0987654321" }
      }

      it "updates the requested phone" do
        phone = Phone.create! valid_attributes
        put :update, params: {id: phone.to_param, phone: new_attributes}, session: valid_session
        phone.reload
        expect(phone.number).to eq("0987654321")
      end

      it "renders a JSON response with the phone" do
        phone = Phone.create! valid_attributes

        put :update, params: {id: phone.to_param, phone: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested phone" do
      phone = Phone.create! valid_attributes
      expect {
        delete :destroy, params: {id: phone.to_param}, session: valid_session
      }.to change(Phone, :count).by(-1)
    end
  end

end
