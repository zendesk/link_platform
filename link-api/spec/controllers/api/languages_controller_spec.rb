# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::LanguagesController, type: :controller do
  let(:link_instance) { create(:link_instance) }
  let(:language) { create(:language, link_instance: link_instance) }
  let(:service) { create(:service) }
  let(:location) { create(:location) }
  let(:admin) { create(:admin, link_instance: link_instance) }

  # This should return the minimal set of attributes required to create a valid
  # Language. As you add validations to Language, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) do
    {
      service_id: service.id,
      location_id: location.id,
      language: 'en'
    }
  end

  let(:invalid_attributes) do
    {
      language: 'foobar'
    }
  end

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # LanguagesController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  before do
    allow_any_instance_of(ApplicationController).
      to receive(:current_link_instance).and_return(link_instance)
  end

  describe 'GET #index' do
    before { create(:language, link_instance: link_instance) }

    it 'returns a success response' do
      get :index, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe 'GET #show' do
    it 'returns a success response' do
      get :show, params: { id: language.to_param },
                 session: valid_session
      expect(response).to be_successful
    end
  end

  describe 'POST #create' do
    context 'when not logged in' do
      it 'returns unauthorized' do
        post :create, params: { language: valid_attributes },
                      session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in to another instance' do
      it 'returns not found' do
        login create(:admin)

        post :create, params: { language: valid_attributes },
                      session: valid_session
        expect(response).to have_http_status(404)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      context 'with valid params' do
        it 'creates a new Language' do
          expect do
            post :create, params: { language: valid_attributes },
                          session: valid_session
          end.to change(Language, :count).by(1)
        end

        it 'renders a JSON response with the new language' do
          post :create, params: { language: valid_attributes },
                        session: valid_session
          expect(response).to have_http_status(:created)
          expect(response.content_type).to eq('application/json')
          expect(response.location).to eq(api_language_url(Language.last))
        end
      end

      context 'with invalid params' do
        it 'renders a JSON response with errors for the new language' do
          post :create, params: { language: invalid_attributes },
                        session: valid_session
          expect(response).to have_http_status(:unprocessable_entity)
          expect(response.content_type).to eq('application/json')
        end
      end
    end
  end

  describe 'PUT #update' do
    let(:new_attributes) do
      { language: 'es' }
    end

    context 'when not logged in' do
      it 'returns unauthorized' do
        params = { id: language.to_param, language: new_attributes }
        put :update, params: params, session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      context 'with valid params' do
        it 'updates the requested language' do
          params = { id: language.to_param, language: new_attributes }
          put :update, params: params, session: valid_session
          language.reload

          expect(language.language).to eq('es')
        end

        it 'renders a JSON response with the language' do
          params = { id: language.to_param, language: valid_attributes }
          put :update, params: params, session: valid_session
          expect(response).to have_http_status(:ok)
          expect(response.content_type).to eq('application/json')
        end
      end

      context 'with invalid params' do
        it 'renders a JSON response with errors for the language' do
          params = { id: language.to_param, language: invalid_attributes }
          put :update, params: params, session: valid_session
          expect(response).to have_http_status(:unprocessable_entity)
          expect(response.content_type).to eq('application/json')
        end
      end
    end
  end

  describe 'DELETE #destroy' do
    context 'when not logged in' do
      it 'returns unauthorized' do
        delete :destroy, params: { id: language.to_param },
                         session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      it 'destroys the requested language' do
        language.save!
        expect do
          delete :destroy, params: { id: language.to_param },
                           session: valid_session
        end.to change(Language, :count).by(-1)
      end
    end
  end
end
