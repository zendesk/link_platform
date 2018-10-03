Rails.application.routes.draw do
  resources :phones
  resources :link_instances
  resources :settings
  devise_for :admins

  namespace :api do
    resources :service_at_locations
    resources :services
    resources :contacts
    resources :phones
  end
end
