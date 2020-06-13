Rails.application.routes.draw do
  resources :reviews
  resources :restaurants do 
  resources :reviews
  end


  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  post '/reviews/:review_id/restaurants/:id', to: 'restaurants#new_review'

  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end


