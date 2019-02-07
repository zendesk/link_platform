# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::ServicesController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/api/services').
        to route_to('api/services#index')
    end

    it 'routes to #show' do
      expect(get: '/api/services/1').
        to route_to('api/services#show', id: '1')
    end

    it 'routes to #create' do
      expect(post: '/api/services').
        to route_to('api/services#create')
    end

    it 'routes to #update via PUT' do
      expect(put: '/api/services/1').
        to route_to('api/services#update', id: '1')
    end

    it 'routes to #update via PATCH' do
      expect(patch: '/api/services/1').
        to route_to('api/services#update', id: '1')
    end

    it 'routes to #destroy' do
      expect(delete: '/api/services/1').
        to route_to('api/services#destroy', id: '1')
    end
  end
end
