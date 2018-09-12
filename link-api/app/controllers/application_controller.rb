class ApplicationController < ActionController::API
  def current_link_instance
    @current_link_instance ||= LinkInstance.find_by(subdomain: request.subdomain)
  end

  def assert_link_instance
    return if current_link_instance.present?

    render json: {
      error: "UnknownLinkInstance"
    }, status: 404
  end
end
