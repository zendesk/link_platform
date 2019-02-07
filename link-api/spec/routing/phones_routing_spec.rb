# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::PhonesController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/api/phones').to route_to('api/phones#index')
    end

    it 'routes to #show' do
      expect(get: '/api/phones/1').to route_to('api/phones#show', id: '1')
    end

    it 'routes to #create' do
      expect(post: '/api/phones').to route_to('api/phones#create')
    end

    it 'routes to #update via PUT' do
      expect(put: '/api/phones/1').to route_to('api/phones#update', id: '1')
    end

    it 'routes to #update via PATCH' do
      expect(patch: '/api/phones/1').to route_to('api/phones#update', id: '1')
    end

    it 'routes to #destroy' do
      expect(delete: '/api/phones/1').to route_to('api/phones#destroy', id: '1')
    end
  end
end
