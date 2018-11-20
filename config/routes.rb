Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :comments, only: [:index, :create, :destroy, :update]
    end
  end

  match '*path', to: 'pages#index', via: :all


end
