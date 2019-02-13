# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::RegularSchedulesController, type: :controller do
  let(:link_instance) { create(:link_instance) }

  let(:regular_schedule) do
    create(:regular_schedule, link_instance: link_instance)
  end

  let(:admin) { create(:admin, link_instance: link_instance) }

  # This should return the minimal set of attributes required to create a valid
  # RegularSchedule. As you add validations to RegularSchedule, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) do
    {
      weekday: 1
    }
  end

  let(:invalid_attributes) do
    {
      weekday: 9
    }
  end

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # RegularSchedulesController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  before do
    login admin
    allow_any_instance_of(ApplicationController).
      to receive(:current_link_instance).and_return(link_instance)
  end

  describe 'GET #index' do
    it 'returns a success response' do
      get :index, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe 'GET #show' do
    it 'returns a success response' do
      get :show, params: { id: regular_schedule.to_param },
                 session: valid_session
      expect(response).to be_successful
    end
  end

  describe 'POST #create' do
    context 'with valid params' do
      it 'creates a new RegularSchedule' do
        expect do
          post :create, params: { regular_schedule: valid_attributes },
                        session: valid_session
        end.to change(RegularSchedule, :count).by(1)
      end

      it 'renders a JSON response with the new regular_schedule' do
        post :create, params: { regular_schedule: valid_attributes },
                      session: valid_session
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
        expect(response.location).
          to eq(api_regular_schedule_url(RegularSchedule.last))
      end
    end

    context 'with invalid params' do
      it 'renders a JSON response with errors for the new regular_schedule' do
        post :create, params: { regular_schedule: invalid_attributes },
                      session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe 'PUT #update' do
    context 'with valid params' do
      let(:new_attributes) do
        {
          weekday: 5
        }
      end

      it 'updates the requested regular_schedule' do
        params = {
          id: regular_schedule.to_param,
          regular_schedule: new_attributes
        }
        put :update, params: params, session: valid_session
        regular_schedule.reload
        expect(regular_schedule.weekday).to eq(5)
      end

      it 'renders a JSON response with the regular_schedule' do
        params = {
          id: regular_schedule.to_param,
          regular_schedule: valid_attributes
        }
        put :update, params: params, session: valid_session
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end
    end

    context 'with invalid params' do
      it 'renders a JSON response with errors for the regular_schedule' do
        params = {
          id: regular_schedule.to_param,
          regular_schedule: invalid_attributes
        }
        put :update, params: params, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe 'DELETE #destroy' do
    let!(:regular_schedule) do
      create(:regular_schedule, link_instance: link_instance)
    end

    it 'destroys the requested regular_schedule' do
      expect do
        delete :destroy, params: { id: regular_schedule.to_param },
                         session: valid_session
      end.to change(RegularSchedule, :count).by(-1)
    end
  end
end
