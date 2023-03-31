Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :csv, only: [:index]
    end
  end

  root "homes#index"
end
