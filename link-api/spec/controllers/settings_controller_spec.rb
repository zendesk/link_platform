require 'rails_helper'

RSpec.describe SettingsController, type: :controller do

end


  let(:valid_attributes) {
    {
      theme_color: "#00000"
      button_color: "#CCCCCC"
      feedback_email: "linksf@zendesk.com"
      link_instance_id: "1"
    }
  }

  let(:invalid_attributes) {
    {
      name: "Invalid",
      feedback_email: nil
    }
  }
  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication)
  let(:valid_session) { {} }

  describe "GET #index" do
    before { create(:settings) }

    it "returns a success response" do
      settings = Settings.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(response).to be_success
    end
  end

  describe "GET #show" do
    let (:settings) { create(:settings) }
    it "returns a success response" do
      settings = Settings.create! valid_attributes
      get :show, params: {id: settings.to_param}, session: valid_session
      expect(response).to be_success
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Settings" do
        expect {
          post :create, params: {settings: valid_attributes}, session: valid_session
        }.to change(Settings, :count).by(1)
      end

      it "renders a JSON response with the new settings" do

        post :create, params: {settings: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
        expect(response.location).to eq(settings_url(Settings.last))
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the new settings" do

        post :create, params: {settings: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "PUT #update" do
    let(:settings) { create(:settings) }
    context "with valid params" do
      let(:new_attributes) {
        {
          theme_color: "#E3E3E3",
          feedback_email: "someone@zendesk.com"
        }
      }

      it "updates the requested settings" do
        put :update, params: {id: settings.to_param, settings: new_attributes}, session: valid_session
        settings.reload

        expect(settings.theme_color).to eq("#E3E3E3")
      end

      it "renders a JSON response with the settings" do

        put :update, params: {id: settings.to_param, settings: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the settings" do

        put :update, params: {id: settings.to_param, settings: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "DELETE #destroy" do
    let!(:settings) { create(:settings) }
    it "destroys the requested settings" do
      expect {
        delete :destroy, params: {id: settings.to_param}, session: valid_session
      }.to change(Settings, :count).by(-1)
    end
  end

end
