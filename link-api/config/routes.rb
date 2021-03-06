# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for 'Admin', at: 'auth', controllers: {
    registrations: 'admins/registrations'
  }

  resources :link_instances

  concern :full do
    member do
      get :full, action: :show_full
      put :full, action: :update_full
    end
    collection do
      get :full
      post :full, action: :create_full
    end
  end

  namespace :api do
    resources :contacts
    resources :locations, concerns: :full
    resources :phones
    resources :postal_addresses
    resources :programs
    resources :holiday_schedules
    resources :languages
    resources :services, concerns: :full
    resources :organizations, concerns: :full
    resources :physical_addresses
    resources :regular_schedules
    resources :taxonomies
    resources :eligibilities
  end
end
