Rails.application.routes.draw do
  mount_devise_token_auth_for 'Admin', at: 'auth'

  resources :link_instances

  namespace :api do
    resources :contacts
    resources :locations
    resources :phones
    resources :postal_addresses
    resources :holiday_schedules
    resources :languages
    resources :service_at_locations
    resources :services
    resources :organizations
    resources :physical_addresses
  end
end
