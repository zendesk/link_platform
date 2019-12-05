# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::TaxonomiesController, type: :controller do
  let(:link_instance) { create(:link_instance) }
  let(:taxonomy) { create(:taxonomy, link_instance: link_instance) }
  let(:admin) { create(:admin, link_instance: link_instance) }

  # This should return the minimal set of attributes required to create a valid
  # taxonomy. As you add validations to taxonomy, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) do
    {
      name: 'Food',
      vocabulary: 'AIRS',
      parent_id: nil,
      parent_name: nil
    }
  end

  let(:invalid_attributes) do
    {
      name: nil
    }
  end

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # taxonomiesController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  before do
    allow_any_instance_of(ApplicationController).
      to receive(:current_link_instance).and_return(link_instance)
  end

  describe 'GET #index' do
    before { create(:taxonomy, link_instance: link_instance) }

    it 'returns a success response' do
      get :index, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe 'GET #show' do
    let(:taxonomy) { create(:taxonomy, link_instance: link_instance) }

    it 'returns a success response' do
      get :show, params: { id: taxonomy.to_param }, session: valid_session
      expect(response).to be_successful
    end
  end

  describe 'POST #create' do
    context 'when not logged in' do
      it 'returns unauthorized' do
        post :create, params: { taxonomy: valid_attributes },
                      session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in to another instance' do
      it 'returns not found' do
        login create(:admin)

        post :create, params: { taxonomy: valid_attributes },
                      session: valid_session
        expect(response).to have_http_status(404)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      context 'with valid params' do
        it 'creates a new taxonomy' do
          expect do
            post :create, params: { taxonomy: valid_attributes },
                          session: valid_session
          end.to change(Taxonomy, :count).by(1)
        end

        it 'renders a JSON response with the new taxonomy' do
          post :create, params: { taxonomy: valid_attributes },
                        session: valid_session
          expect(response).to have_http_status(:created)
          expect(response.content_type).to eq('application/json')
          expect(response.location).to eq(api_taxonomy_url(Taxonomy.last))
        end
      end

      context 'with invalid params' do
        it 'renders a JSON response with errors for the new taxonomy' do
          post :create, params: { taxonomy: invalid_attributes },
                        session: valid_session
          expect(response).to have_http_status(:unprocessable_entity)
          expect(response.content_type).to eq('application/json')
        end
      end
    end
  end

  describe 'PUT #update' do
    let(:new_attributes) do
      {
        name: 'Shelter',
        vocabulary: 'Open Eligibility'
      }
    end

    context 'when not logged in' do
      it 'returns unauthorized' do
        put :update, params: { id: taxonomy.to_param,
                               taxonomy: new_attributes },
                     session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      context 'with valid params' do
        it 'updates the requested taxonomy' do
          params = { id: taxonomy.to_param, taxonomy: new_attributes }
          put :update, params: params, session: valid_session
          taxonomy.reload

          expect(taxonomy.name).to eq('Shelter')
          expect(taxonomy.vocabulary).to eq('Open Eligibility')
        end

        it 'renders a JSON response with the taxonomy' do
          params = { id: taxonomy.to_param, taxonomy: valid_attributes }
          put :update, params: params, session: valid_session
          expect(response).to have_http_status(:ok)
          expect(response.content_type).to eq('application/json')
        end
      end

      context 'with invalid params' do
        it 'renders a JSON response with errors for the taxonomy' do
          params = { id: taxonomy.to_param, taxonomy: invalid_attributes }
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
        delete :destroy, params: { id: taxonomy.to_param },
                         session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      it 'destroys the requested taxonomy' do
        taxonomy.save!
        expect do
          delete :destroy, params: { id: taxonomy.to_param },
                           session: valid_session
        end.to change(Taxonomy, :count).by(-1)
      end
    end
  end
end
