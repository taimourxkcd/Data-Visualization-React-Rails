Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :csv, only: [:index]
      get "csv/date", to: "csv#date"
    end
  end

  root "homes#index"
end
