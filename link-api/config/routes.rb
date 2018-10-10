Rails.application.routes.draw do
  resources :link_instances
  devise_for :admins

  namespace :api do
    resources :service_at_locations
    resources :services
    resources :contacts
    resources :phones
    resources :postal_addresses
  end
end
