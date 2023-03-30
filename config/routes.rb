Rails.application.routes.draw do
  get "csv/index"
  resources :homes
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # root "homes#index"
  root "csv#index"
end
