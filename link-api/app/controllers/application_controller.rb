class ApplicationController < ActionController::API
  before_action :assert_link_instance

  def current_link_instance
    @current_link_instance ||= LinkInstance.find_by(subdomain: request.subdomain)
  end

  def assert_link_instance
    return if current_link_instance.present?

    # TODO:  Instead of just returning 404, this should forward
    # to the signup page when it exists
    render json: {
      error: "UnknownLinkInstance"
    }, status: :not_found
  end
end
