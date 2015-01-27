Rails.application.routes.draw do
	devise_for :users, controllers: { sessions: "sessions" }

	resources :clients
  resources :street_suffixes
  resources :client_types
  resources :segments
  resources :employees
  resources :states, only: [:index]
  resources :jornals
  resources :diario_oficials
  resources :materials
  resources :retrancas
	resources :publicacaos
	resources :roles, only: [:index]
end
