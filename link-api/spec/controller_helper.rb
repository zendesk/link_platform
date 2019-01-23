module ControllerHelper
  require 'devise_token_auth'

  def login(admin)
    request.headers.merge! admin.create_new_auth_token
  end
end
