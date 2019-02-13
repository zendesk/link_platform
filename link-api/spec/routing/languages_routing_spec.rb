# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::LanguagesController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/api/languages').
        to route_to('api/languages#index')
    end

    it 'routes to #show' do
      expect(get: '/api/languages/1').
        to route_to('api/languages#show', id: '1')
    end

    it 'routes to #create' do
      expect(post: '/api/languages').
        to route_to('api/languages#create')
    end

    it 'routes to #update via PUT' do
      expect(put: '/api/languages/1').
        to route_to('api/languages#update', id: '1')
    end

    it 'routes to #update via PATCH' do
      expect(patch: '/api/languages/1').
        to route_to('api/languages#update', id: '1')
    end

    it 'routes to #destroy' do
      expect(delete: '/api/languages/1').
        to route_to('api/languages#destroy', id: '1')
    end
  end
end
