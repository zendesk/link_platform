require 'rails_helper'

RSpec.describe Api::LanguagesController, type: :controller do
  let(:link_instance) { create(:link_instance) }
  let(:service) { create(:service) }
  let(:location) { create(:location) }

  # This should return the minimal set of attributes required to create a valid
  # Language. As you add validations to Language, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    {
      service_id: service.id,
      location_id: location.id,
      language: "en"
    }
  }

  let(:invalid_attributes) {
    {
      language: "foobar"
    }
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # LanguagesController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  before do
    allow_any_instance_of(ApplicationController).to receive(:current_link_instance).and_return(link_instance)
  end

  describe "GET #index" do
    before { create(:language, link_instance: link_instance) }

    it "returns a success response" do
      get :index, params: {}, session: valid_session
      expect(response).to be_success
    end
  end

  describe "GET #show" do
    let(:language) { create(:language, link_instance: link_instance) }

    it "returns a success response" do
      get :show, params: {id: language.to_param}, session: valid_session
      expect(response).to be_success
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Language" do
        expect {
          post :create, params: {language: valid_attributes}, session: valid_session
        }.to change(Language, :count).by(1)
      end

      it "renders a JSON response with the new language" do

        post :create, params: {language: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
        expect(response.location).to eq(api_language_url(Language.last))
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the new language" do

        post :create, params: {language: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "PUT #update" do
    let(:language) { create(:language, link_instance: link_instance) }

    context "with valid params" do
      let(:new_attributes) {
        { language: "es" }
      }

      it "updates the requested language" do
        put :update, params: {id: language.to_param, language: new_attributes}, session: valid_session
        language.reload

        expect(language.language).to eq("es")
      end

      it "renders a JSON response with the language" do
        put :update, params: {id: language.to_param, language: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the language" do
        put :update, params: {id: language.to_param, language: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "DELETE #destroy" do
    let!(:language) { create(:language, link_instance: link_instance) }

    it "destroys the requested language" do
      expect {
        delete :destroy, params: {id: language.to_param}, session: valid_session
      }.to change(Language, :count).by(-1)
    end
  end

end
