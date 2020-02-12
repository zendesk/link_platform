# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::OrganizationsController, type: :controller do
  let(:link_instance) { create(:link_instance) }
  let(:organization) { create(:organization, link_instance: link_instance) }
  let(:admin) { create(:admin, link_instance: link_instance) }
  let(:contacts) { create(:contacts, link_instance: link_instance, organization: organization) }
  let(:locations) { create(:locations, link_instance: link_instance, organization: organization) }
  let(:programs) { create(:programs, link_instance: link_instance, organization: organization) }
  let(:services) { create(:services, link_instance: link_instance, organization: organization) }

  # This should return the minimal set of attributes required to create a valid
  # Organization. As you add validations to Organization, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) do
    {
      name: 'Zendesk Organization',
      alternate_name: 'ZD Org',
      description: 'Home of LinkSF'
    }
  end

  let(:invalid_attributes) do
    {
      bubblegum: 'sticks'
    }
  end

  let(:valid_full_attributes) do
    {
      name:'ZD org',
      description:'linksf home',
      contacts: [
        {
          name: 'Moose',
          department: 'forest'
        },
        {
          name: 'Sloth',
          department: 'jungle'
        }
      ],
      programs: [
        {        
          name: 'Legal program'
        }
      ],
      locations: [
        {
          name: 'Zendesk',
          description: 'Our home'
        }
      ],
      services: [
        {
          name: 'Legal Help',
          status: 'Open'
        }
      ]
    }
  end

  let(:invalid_full_attributes) do
    {
      name:'ZD org',
      description:'linksf home',
      locations: [
        {
          longitude: -181.01
        }
      ]
    }
  end

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # OrganizationsController. Be sure to keep this updated too.
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
    before { create(:organization, link_instance: link_instance) }

    it 'returns a success response' do
      get :full, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe 'GET #show' do
    it 'returns a success response' do
      get :show, params: { id: organization.to_param }, session: valid_session
      expect(response).to be_successful
    end
  end

  describe 'GET #show_full' do
    let(:organization) { create(:organization, link_instance: link_instance) }

    it 'returns a success response' do
      get :show_full, params: { id: organization.to_param }, session: valid_session
      expect(response).to be_successful
    end
  end

  describe 'POST #create' do
    context 'when not logged in' do
      it 'returns unauthorized' do
        post :create, params: { organization: valid_full_attributes },
        session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      context 'with valid params' do
        it 'creates a new Organization' do
          expect do
            post :create, params: { organization: valid_attributes },
            session: valid_session
          end.to change(Organization, :count).by(1)
        end

        it 'renders a JSON response with the new organization' do
          post :create, params: { organization: valid_attributes },
          session: valid_session
          expect(response).to have_http_status(:created)
          expect(response.content_type).to eq('application/json')
          expect(response.location).to eq(api_organization_url(Organization.last))
        end
      end

      context 'with invalid params' do
        it 'renders a JSON response with errors for the new organization' do
          post :create, params: { organization: invalid_attributes },
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
        post :create_full, params: { organization: valid_full_attributes },
        session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in to another instance' do
      it 'returns not found' do
        login create(:admin)

        post :create_full, params: { organization: valid_full_attributes },
        session: valid_session
        expect(response).to have_http_status(404)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      context 'with valid params' do
        it 'creates a new Organization' do
          expect do
            post :create_full, params: { organization: valid_full_attributes },
            session: valid_session
          end.to change(Organization, :count).by(1).
          and change(Contact, :count).by(2).
          and change(Location, :count).by(1).
          and change(Program, :count).by(1)
        end

        it 'renders a JSON response with the new organization' do
          post :create_full, params: { organization: valid_full_attributes },
          session: valid_session
          expect(response).to have_http_status(:created)
          expect(response.content_type).to eq('application/json')
          expect(response.location).to eq(api_organization_url(Organization.last))
        end
      end

      context 'with invalid params' do
        it 'renders a JSON response with errors for the new organization' do
          post :create_full, params: { organization: invalid_full_attributes },
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
        name: 'Canonball'
      }
    end
    
    context 'when not logged in' do
      it 'returns unauthorized' do
        put :update, params: { id: organization.to_param, organization: new_attributes },
        session: valid_session
        expect(response).to have_http_status(401)
      end
    end

    context 'when logged in' do
      before do
        login admin
      end

      context 'with valid params' do
        it 'updates the requested organization' do
          params = { id: organization.to_param, organization: new_attributes }
          put :update, params: params, session: valid_session
          organization.reload
          expect(organization.name).to eq('Canonball')
        end

        it 'renders a JSON response with the organization' do
          params = { id: organization.to_param, organization: valid_attributes }
          put :update, params: params, session: valid_session
          expect(response).to have_http_status(:ok)
          expect(response.content_type).to eq('application/json')
        end
      end
    end
  end

  describe 'DELETE #destroy' do
    before do
      login admin
    end

    it 'destroys the requested organization' do
      organization.save!
      expect do
        delete :destroy, params: { id: organization.to_param },
        session: valid_session
      end.to change(Organization, :count).by(-1)
    end
  end
end
