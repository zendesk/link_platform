# frozen_string_literal: true

require_relative 'concerns/api_params_helper'

module Api
  class ApiBaseController < ApplicationController
    include Api::ApiParamsHelper
  end
end
