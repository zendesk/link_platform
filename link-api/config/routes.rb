Rails.application.routes.draw do
  resources :link_instances
  resources :service_at_locations
  resources :services
  resources :contacts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
