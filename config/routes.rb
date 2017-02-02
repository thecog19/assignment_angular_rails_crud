Rails.application.routes.draw do
  root to: "pins#index"

  scope :api do
    scope :v1 do
      devise_for :users
      resources :pins 
    end
  end
end
