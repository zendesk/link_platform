# frozen_string_literal: true

module Api
  class ServicesController < ApiBaseController

    before_action :set_service, only: %i[show show_full update destroy]

    # GET /api/services
    def index
      @services = current_link_instance.services

      render json: @services
    end

    # GET /api/services/full
    def full
      @services = current_link_instance.services
      full_services = @services.to_json(include: 
        [:contacts,
        :regular_schedules,
        :holiday_schedules,
        :languages,
        :phones])

        render json: full_services
    end

    # GET /api/services/1
    def show
      render json: @service
    end

    # GET /api/services/1/full
    def show_full
      full_service = @service.to_json(include:
        [:contacts,
        :regular_schedules,
        :holiday_schedules,
        :languages,
        :phones])
      render json: full_service
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

    def create_full
      require 'byebug'
      debugger
      @service = current_link_instance.services.build(mapped_service_params)

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

    def mapped_service_params
      service_params.tap do |mapped_params|
        # Change the contacts param and inject the link instance id
        if mapped_params.has_key?('contacts')
          contacts = mapped_params.delete('contacts')

          mapped_params['contacts_attributes'] = contacts.map do |contact|
            contact['link_instance_id'] = current_link_instance.id

            contact
          end
        end
      end
    end

    # Only allow a trusted parameter "white list" through.
    def service_params
      # params.require(:service).permit(:organization_id,:name,:status, contact_attributes: [:name, :department])
      params.require(:service).permit(SERVICE_PARAMS, contacts: CONTACT_PARAMS )
      # @service_params = params.require(:service).permit(SERVICE_PARAMS, CONTACT_PARAMS )
    end
  end
end
