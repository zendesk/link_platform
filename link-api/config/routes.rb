Rails.application.routes.draw do
  namespace :api do
    resources :service_at_locations
    resources :services
    resources :contacts
  end
end
