KetraWeb::Application.routes.draw do
  # Static Pages
  root :to => "pages#home"
  get "products"   => "pages#products", :as => 'products'
  get "item"   => "pages#item", :as => 'item'
  get "projects"   => "pages#projects", :as => 'projects'
  get "resources"   => "pages#resources", :as => 'resources'
  match '/contact',    to: 'pages#contact',    via: 'get'
  match '/careers',    to: 'pages#careers',    via: 'get'
  get "who_we_are"   => "pages#who_we_are", :as => 'who_we_are'
end
