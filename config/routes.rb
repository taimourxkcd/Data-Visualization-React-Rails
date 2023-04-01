Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :csv, only: [:index]
      get "csv/date", to: "csv#date"

      resources :csv do
        collection do
          get "source/:source_name", to: "csv#by_source"
        end
      end
    end
  end

  root "homes#index"
end
