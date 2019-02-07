# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::PostalAddressesController, type: :controller do
  let(:link_instance) { create(:link_instance) }
  let(:location) { create(:location) }
  let(:postal_address) { create(:postal_address, link_instance: link_instance) }
  let(:admin) { create(:admin, link_instance: link_instance) }

  before do
    allow_any_instance_of(ApplicationController).
      to receive(:current_link_instance).and_return(link_instance)
  end

  # This should return the minimal set of attributes required to create a valid
  # PostalAddress. As you add validations to PostalAddress, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) do
    # location_id: "1",
    {
      link_instance_id: link_instance.id,
      location_id: location.id,
      attention: 'Me',
      address_1: '1019 Market',
      city: 'San Francisco',
      region: 'Bay Area',
      state_province: 'CA',
      postal_code: '94103',
      country: 'USA'
    }
  end

  let(:invalid_attributes) do
    { country: 'A' }
  end

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # PostalAddressesController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe 'GET #index' do
    it 'returns a success response' do
      get :index, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe 'GET #show' do
    it 'returns a success response' do
      get :show, params: { id: postal_address.to_param }, session: valid_session
      expect(response).to be_successful
    end
  end

  describe 'POST #create' do
    context 'when not logged in' do
      it 'returns unauthorized' do
        post :create, params: { postal_address: valid_attributes },
                      session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in to another instance' do
      it 'returns not found' do
        login create(:admin)

        post :create, params: { postal_address: valid_attributes },
                      session: valid_session
        expect(response).to have_http_status(404)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      context 'with valid params' do
        it 'creates a new PostalAddress' do
          expect do
            post :create, params: { postal_address: valid_attributes },
                          session: valid_session
          end.to change(PostalAddress, :count).by(1)
        end

        it 'renders a JSON response with the new postal_address' do
          post :create, params: { postal_address: valid_attributes },
                        session: valid_session
          expect(response).to have_http_status(:created)
          expect(response.content_type).to eq('application/json')
          expect(response.location).
            to eq(api_postal_address_url(PostalAddress.last))
        end
      end

      context 'with invalid params' do
        it 'renders a JSON response with errors for the new postal_address' do
          post :create, params: { postal_address: invalid_attributes },
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
        state_province: 'AR'
      }
    end

    context 'when not logged in' do
      it 'returns unauthorized' do
        params = { id: postal_address.to_param, postal_address: new_attributes }
        put :update, params: params, session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      context 'with valid params' do
        it 'updates the requested postal_address' do
          params = {
            id: postal_address.to_param,
            postal_address: new_attributes
          }
          put :update, params: params, session: valid_session
          postal_address.reload
          expect(postal_address.state_province).to eq('AR')
        end

        it 'renders a JSON response with the postal_address' do
          params = {
            id: postal_address.to_param,
            postal_address: valid_attributes
          }
          put :update, params: params, session: valid_session
          expect(response).to have_http_status(:ok)
          expect(response.content_type).to eq('application/json')
        end
      end

      context 'with invalid params' do
        it 'renders a JSON response with errors for the postal_address' do
          params = {
            id: postal_address.to_param,
            postal_address: invalid_attributes
          }
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
        delete :destroy, params: { id: postal_address.to_param },
                         session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      it 'destroys the requested postal_address' do
        postal_address.save!
        expect do
          delete :destroy, params: { id: postal_address.to_param },
                           session: valid_session
        end.to change(PostalAddress, :count).by(-1)
      end
    end
  end
end
