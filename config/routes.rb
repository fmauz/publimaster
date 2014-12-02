Rails.application.routes.draw do
	resources :clients
  resources :street_suffixes
  resources :client_types
  resources :segments
  resources :employees
  resources :states
  resources :jornals
end
