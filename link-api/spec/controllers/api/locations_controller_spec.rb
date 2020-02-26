# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::LocationsController, type: :controller do
  let(:link_instance) { create(:link_instance) }
  let(:organization) { create(:organization) }
  let(:location) { create(:location, link_instance: link_instance, organization: organization) }
  let(:service) { create(:service, link_instance: link_instance, organization: organization) }
  let(:language) { create(:language, link_instance: link_instance, location: location) }
  let(:phone) { create(:phone, link_instance: link_instance, location: location) }
  let(:postal_address) { create(:postal_address, link_instance: link_instance, location: location) }
  let(:admin) { create(:admin, link_instance: link_instance) }
  let(:physical_address) do
    create(:physical_address, link_instance: link_instance, location: location)
  end
  let(:holiday_schedule) do
    create(:holiday_schedule, link_instance: link_instance, location: location)
  end
  let(:regular_schedule) do
    create(:regular_schedule, link_instance: link_instance, location: location)
  end
  let(:service_at_location) do
    create(:service_at_location, link_instance: link_instance, service: service, location: location)
  end

  # This should return the minimal set of attributes required to create a valid
  # Location. As you add validations to Location, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) do
    {
      name: 'Zendesk',
      description: 'Our home'
    }
  end

  let(:invalid_attributes) do
    {
      longitude: -181.01
    }
  end

  let(:valid_full_attributes) do
    {
      name: 'Zendesk',
      description: 'Our home',
      service_at_locations: [
        {
          service_id: service.id,
          description: 'Legal Help at Zendesk'
        }
      ],
      physical_addresses: [
        {
          address_1: '1019 Market',
          city: 'San Francisco',
          state_province: 'CA',
          postal_code: '94103',
          country: 'USA'
        }
      ],
      postal_addresses: [
        {
          attention: 'Me',
          address_1: '1019 Market',
          city: 'San Francisco',
          region: 'Bay Area',
          state_province: 'CA',
          postal_code: '94103',
          country: 'USA'
        }
      ],
      regular_schedules: [
        {
          weekday: 2
        }
      ],
      holiday_schedules: [
        {
          closed: false,
          start_date: '2018-01-01',
          end_date: '2018-12-31'
        }
      ],
      languages: [
        {
          language: 'en'
        }
      ],
      phones: [
        {
          number: '+1 415 123-4567'
        }
      ]
    }
  end

  let(:invalid_full_attributes) do
    {
      name: 'Zendesk',
      description: 'Our home',
      longitude: -181.01
    }
  end

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # LocationsController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  before do
    allow_any_instance_of(ApplicationController).
      to receive(:current_link_instance).and_return(link_instance)
  end

  describe 'GET #index' do
    it 'returns a success response' do
      get :index, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe 'GET #full' do
    before { create(:location, link_instance: link_instance) }

    it 'returns a success response' do
      get :full, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe 'GET #show' do
    it 'returns a success response' do
      get :show, params: { id: location.to_param }, session: valid_session
      expect(response).to be_successful
    end
  end

  describe 'GET #show_full' do
    let(:location) { create(:location, link_instance: link_instance) }

    it 'returns a success response' do
      get :show_full, params: { id: location.to_param }, session: valid_session
      expect(response).to be_successful
    end
  end

  describe 'POST #create' do
    context 'when not logged in' do
      it 'returns unauthorized' do
        post :create, params: { location: valid_attributes },
                      session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in to another instance' do
      it 'returns not found' do
        login create(:admin)

        post :create, params: { location: valid_attributes },
                      session: valid_session
        expect(response).to have_http_status(404)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      context 'with valid params' do
        it 'creates a new Location' do
          expect do
            post :create, params: { location: valid_attributes },
                          session: valid_session
          end.to change(Location, :count).by(1)
        end

        it 'renders a JSON response with the new location' do
          post :create, params: { location: valid_attributes },
                        session: valid_session
          expect(response).to have_http_status(:created)
          expect(response.content_type).to eq('application/json')
          expect(response.location).to eq(api_location_url(Location.last))
        end
      end

      context 'with invalid params' do
        it 'renders a JSON response with errors for the new location' do
          post :create, params: { location: invalid_attributes },
                        session: valid_session
          expect(response).to have_http_status(:unprocessable_entity)
          expect(response.content_type).to eq('application/json')
        end
      end
    end
  end

  describe 'POST #create_full' do
    context 'when not logged in' do
      it 'returns unauthorized' do
        post :create_full, params: { location: valid_full_attributes },
                           session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in to another instance' do
      it 'returns not found' do
        login create(:admin)

        post :create_full, params: { location: valid_full_attributes },
                           session: valid_session
        expect(response).to have_http_status(404)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      context 'with valid params' do
        it 'creates a new Location' do
          expect do
            post :create_full, params: { location: valid_full_attributes },
                               session: valid_session
          end.to change(Location, :count).by(1).
            and change(PhysicalAddress, :count).by(1).
            and change(ServiceAtLocation, :count).by(1).
            and change(RegularSchedule, :count).by(1).
            and change(HolidaySchedule, :count).by(1).
            and change(Language, :count).by(1).
            and change(Phone, :count).by(1)
        end

        it 'renders a JSON response with the new location' do
          post :create_full, params: { location: valid_full_attributes },
                             session: valid_session
          expect(response).to have_http_status(:created)
          expect(response.content_type).to eq('application/json')
          expect(response.location).to eq(api_location_url(Location.last))
        end
      end

      context 'with invalid params' do
        it 'renders a JSON response with errors for the new service' do
          post :create_full, params: { location: invalid_full_attributes },
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
        name: 'St Anthonys'
      }
    end

    context 'when not logged in' do
      it 'returns unauthorized' do
        params = { id: location.to_param, location: new_attributes }
        put :update, params: params, session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      context 'with valid params' do
        it 'updates the requested location' do
          params = { id: location.to_param, location: new_attributes }
          put :update, params: params, session: valid_session
          location.reload
          expect(location.name).to eq('St Anthonys')
        end

        it 'renders a JSON response with the location' do
          params = { id: location.to_param, location: valid_attributes }
          put :update, params: params, session: valid_session
          expect(response).to have_http_status(:ok)
          expect(response.content_type).to eq('application/json')
        end
      end

      context 'with invalid params' do
        it 'renders a JSON response with errors for the location' do
          params = { id: location.to_param, location: invalid_attributes }
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
        delete :destroy, params: { id: location.to_param },
                         session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      it 'destroys the requested location' do
        location.save!
        expect do
          delete :destroy, params: { id: location.to_param },
                           session: valid_session
        end.to change(Location, :count).by(-1)
      end
    end
  end
end
