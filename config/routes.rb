Rails.application.routes.draw do
 resources :subscriptions, only: [:create, :new]
 root to: 'subscriptions#new'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
