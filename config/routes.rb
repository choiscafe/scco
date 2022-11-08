Rails.application.routes.draw do
  resources :ingredients
  resources :pro_ings
  resources :products
  resources :reviews
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  get '/me', to: 'users#show'
  get '/products', to: 'products#index'
  get '/reviews', to: 'reviews#index'
  # patch '/reviews/:id/edit', to: 'reviews#update'
  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"

end
