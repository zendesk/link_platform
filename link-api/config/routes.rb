Rails.application.routes.draw do
  resources :service_at_locations
  resources :services
  resources :contacts
  resources :regular_schedules
  resources :phones
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
