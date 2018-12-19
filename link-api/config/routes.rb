Rails.application.routes.draw do
  resources :link_instances
  devise_for :admins

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
