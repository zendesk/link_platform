# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::RegularSchedulesController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: '/api/regular_schedules').
        to route_to('api/regular_schedules#index')
    end

    it 'routes to #show' do
      expect(get: '/api/regular_schedules/1').
        to route_to('api/regular_schedules#show', id: '1')
    end

    it 'routes to #create' do
      expect(post: '/api/regular_schedules').
        to route_to('api/regular_schedules#create')
    end

    it 'routes to #update via PUT' do
      expect(put: '/api/regular_schedules/1').
        to route_to('api/regular_schedules#update', id: '1')
    end

    it 'routes to #update via PATCH' do
      expect(patch: '/api/regular_schedules/1').
        to route_to('api/regular_schedules#update', id: '1')
    end

    it 'routes to #destroy' do
      expect(delete: '/api/regular_schedules/1').
        to route_to('api/regular_schedules#destroy', id: '1')
    end
  end
end
