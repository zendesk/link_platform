# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for 'Admin', at: 'auth', controllers: {
    registrations: 'admins/registrations'
  }

  resources :link_instances

  namespace :api do
    resources :contacts
    resources :locations
    resources :phones
    resources :postal_addresses
    resources :programs
    resources :holiday_schedules
    resources :languages
    resources :service_at_locations
    resources :services
    resources :organizations
    resources :physical_addresses
    resources :regular_schedules
    resources :taxonomies
  end
end
