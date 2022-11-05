Rails.application.routes.draw do
  resources :ingredients
  resources :pro_ings
  resources :products
  resources :reviews
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"

end
