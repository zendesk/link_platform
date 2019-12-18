# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::ServicesController, type: :controller do
  let(:link_instance) { create(:link_instance) }
  let(:service) { create(:service, link_instance: link_instance) }
  let(:organization) { create(:organization) }
  let(:admin) { create(:admin, link_instance: link_instance) }
  let(:contact) { create(:contact, link_instance: link_instance, service: service)}
  let(:regular_schedule) { create(:regular_schedule, link_instance: link_instance, service: service)}
  let(:holiday_schedule) { create(:holiday_schedule, link_instance: link_instance, service: service)}
  let(:language) { create(:language, link_instance: link_instance, service: service)}
  let(:phone) { create(:phone, link_instance: link_instance, service: service)}

  # This should return the minimal set of attributes required to create a valid
  # Service. As you add validations to Service, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) do
    {
      organization_id: organization.id,
      name: 'Legal Help',
      status: 'Open'
    }
  end

  let(:invalid_attributes) do
    {
      organization_id: nil,
      name: 'Invalid'
    }
  end

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # ServicesController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  before do
    allow_any_instance_of(ApplicationController).
      to receive(:current_link_instance).and_return(link_instance)
  end

  describe 'GET #index' do
    before { create(:service, link_instance: link_instance) }

    it 'returns a success response' do
      get :index, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe 'GET #full' do
  before { create(:service, link_instance: link_instance) }

  it 'returns a success response' do
    get :index, params: {}, session: valid_session
    expect(response).to be_successful
  end
end

  describe 'GET #show' do
    let(:service) { create(:service, link_instance: link_instance) }

    it 'returns a success response' do
      get :show, params: { id: service.to_param }, session: valid_session
      expect(response).to be_successful
    end
  end

  describe 'GET #show_full' do
  let(:service) { create(:service, link_instance: link_instance) }

  it 'returns a success response' do
    get :show, params: { id: service.to_param }, session: valid_session
    expect(response).to be_successful
  end
end

  describe 'POST #create' do
    context 'when not logged in' do
      it 'returns unauthorized' do
        post :create, params: { service: valid_attributes },
                      session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in to another instance' do
      it 'returns not found' do
        login create(:admin)

        post :create, params: { service: valid_attributes },
                      session: valid_session
        expect(response).to have_http_status(404)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      context 'with valid params' do
        it 'creates a new Service' do
          expect do
            post :create, params: { service: valid_attributes },
                          session: valid_session
          end.to change(Service, :count).by(1)
        end

        it 'renders a JSON response with the new service' do
          post :create, params: { service: valid_attributes },
                        session: valid_session
          expect(response).to have_http_status(:created)
          expect(response.content_type).to eq('application/json')
          expect(response.location).to eq(api_service_url(Service.last))
        end
      end

      context 'with invalid params' do
        it 'renders a JSON response with errors for the new service' do
          post :create, params: { service: invalid_attributes },
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
        name: 'Helpful Things',
        status: 'Closed'
      }
    end

    context 'when not logged in' do
      it 'returns unauthorized' do
        put :update, params: { id: service.to_param, service: new_attributes },
                     session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      context 'with valid params' do
        it 'updates the requested service' do
          params = { id: service.to_param, service: new_attributes }
          put :update, params: params, session: valid_session
          service.reload

          expect(service.name).to eq('Helpful Things')
          expect(service.status).to eq('Closed')
        end

        it 'renders a JSON response with the service' do
          params = { id: service.to_param, service: valid_attributes }
          put :update, params: params, session: valid_session
          expect(response).to have_http_status(:ok)
          expect(response.content_type).to eq('application/json')
        end
      end

      context 'with invalid params' do
        it 'renders a JSON response with errors for the service' do
          params = { id: service.to_param, service: invalid_attributes }
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
        delete :destroy, params: { id: service.to_param },
                         session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      it 'destroys the requested service' do
        service.save!
        expect do
          delete :destroy, params: { id: service.to_param },
                           session: valid_session
        end.to change(Service, :count).by(-1)
      end
    end
  end
end
