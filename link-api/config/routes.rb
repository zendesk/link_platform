Rails.application.routes.draw do
  resources :link_instances

  namespace :api do
    resources :service_at_locations
    resources :services
    resources :contacts
  end
end
