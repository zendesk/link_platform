# frozen_string_literal: true

module Api
  class ServicesController < ApplicationController
    ALLOWED_PARAMS = %i[
      organization_id
      program_id
      name
      alternate_name
      description
      url
      email
      status
      interpretation_services
      application_services
      wait_time
      fees
      accreditations
      licenses
    ].freeze

    before_action :set_service, only: %i[show update destroy]

    # GET /api/services
    def index
      @services = current_link_instance.services

      render json: @services
    end

    # GET /api/services/1
    def show
      render json: @service
    end

    # POST /api/services
    def create
      @service = current_link_instance.services.build(service_params)

      if @service.save
        render json: @service,
               status: :created,
               location: api_service_url(@service)
      else
        render json: @service.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /api/services/1
    def update
      if @service.update(service_params)
        render json: @service
      else
        render json: @service.errors, status: :unprocessable_entity
      end
    end

    # DELETE /api/services/1
    def destroy
      @service.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_service
      @service = current_link_instance.services.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def service_params
      params.require(:service).permit(ALLOWED_PARAMS)
    end
  end
end
