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
        [
          :contacts,
          :eligibilities,
          :regular_schedules,
          :holiday_schedules,
          :languages,
          :phones
        ])
      render json: full_services
    end

    # GET /api/services/1
    def show
      render json: @service
    end

    # GET /api/services/1/full
    def show_full
      full_service = @service.to_json(include:
        [
          :contacts,
          :eligibilities,
          :regular_schedules,
          :holiday_schedules,
          :languages,
          :phones
        ])
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

    # POST /api/services/full
    def create_full
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
        # Change the nested param and inject the link instance id
        ['contacts',
         'eligibilities',
         'regular_schedules',
         'holiday_schedules',
         'languages',
         'phones'].each do |key|
          next unless mapped_params.key?(key)

          nested_param = mapped_params.delete(key)

          mapped_params["#{key}_attributes"] = nested_param.map do |param|
            param['link_instance_id'] = current_link_instance.id
            param
          end
        end
      end
    end

    # Only allow a trusted parameter "white list" through.
    def service_params
      params.require(:service).permit(SERVICE_PARAMS, contacts: CONTACT_PARAMS,
                                                      eligibilities: ELIGIBILITY_PARAMS,
                                                      regular_schedules: REGULAR_SCHEDULE_PARAMS,
                                                      holiday_schedules: HOLIDAY_SCHEDULE_PARAMS,
                                                      languages: LANGUAGE_PARAMS,
                                                      phones: PHONE_PARAMS)
    end
  end
end
