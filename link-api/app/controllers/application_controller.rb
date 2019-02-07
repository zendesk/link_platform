# frozen_string_literal: true

class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

  before_action :assert_link_instance
  before_action :authenticate_admin!, only: %i[create update destroy]
  before_action :assert_admin_domain, only: %i[create update destroy]

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

  private

  def subdomain
    request.subdomain
  end
end
