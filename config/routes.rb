Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :ingredients
  resources :pro_ings
  resources :products
  resources :reviews
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  get '/me', to: 'users#show'
  # get '/products', to: 'products#index'
  # get '/myreviews', to: 'reviews#index'
  # get '/products/:id', to: 'producs#show'
  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"

end
