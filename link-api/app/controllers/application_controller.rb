# frozen_string_literal: true

class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

  before_action :assert_link_instance, unless: :devise_controller?

  before_action :authenticate_admin!,
                only: %i[create update destroy],
                unless: :devise_controller?

  before_action :assert_admin_domain,
                only: %i[create update destroy],
                unless: :devise_controller?

  before_action :configure_permitted_parameters, if: :devise_controller?

  def current_link_instance
    @current_link_instance ||= LinkInstance.find_by(subdomain: subdomain)
  end

  def assert_link_instance
    return if current_link_instance.present?

    # TODO:  Instead of just returning 404, this should forward
    # to the signup page when it exists
    render json: {
      error: 'UnknownLinkInstance'
    }, status: :not_found
  end

  def assert_admin_domain
    return if current_admin.link_instance == current_link_instance

    render json: {
      error: 'UnknownLinkInstance'
    }, status: :not_found
  end

  protected

  # Allow extra Admin fields into Devise controller params
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[name nickname])
    devise_parameter_sanitizer.permit(:account_update, keys: %i[name nickname])
  end

  private

  def subdomain
    request.subdomain
  end
end
