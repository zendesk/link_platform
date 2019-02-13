# frozen_string_literal: true

module Admins
  class RegistrationsController < DeviseTokenAuth::RegistrationsController
    protected

    def build_resource
      super

      @resource.link_instance = current_link_instance
    end
  end
end
