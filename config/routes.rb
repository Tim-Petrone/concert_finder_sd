Rails.application.routes.draw do

  get '/events' => 'events_list#events'

  root to: 'public#index'
end
