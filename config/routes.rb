Rails.application.routes.draw do

  devise_for :user, :controllers => { :omniauth_callbacks => 'users/omniauth_callbacks' } , path_names: {sign_in: "login"}

  get '/users/index' => 'users#index'

  get '/profile' => 'profile#index'

  post '/profile' => 'profile#index'

  patch '/profile' => 'profile#index'

  get '/profile/update' => 'profile#update'

  root to: 'public#index'

  get '/events' => 'events_list#events'

  get '/about' => 'public#about'

  get "*path", to: redirect('/')
end
