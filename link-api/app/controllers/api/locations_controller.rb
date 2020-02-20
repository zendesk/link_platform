# frozen_string_literal: true

module Api
  class LocationsController < ApiBaseController
    before_action :set_location, only: %i[show show_full update destroy]

    # GET /locations
    def index
      @locations = current_link_instance.locations.all

      render json: @locations
    end

    # GET /api/locations/full
    def full
      @locations = current_link_instance.locations
      full_locations = @locations.to_json(include:
        [
          :physical_addresses,
          :postal_addresses,
          :services,
          :regular_schedules,
          :holiday_schedules,
          :languages,
          :phones
        ])
      render json: full_locations
    end

    # GET /locations/1
    def show
      render json: @location
    end

    # GET /api/locations/1/full
    def show_full
      full_location = @location.to_json(include:
        [
          :physical_addresses,
          :postal_addresses,
          :services,
          :regular_schedules,
          :holiday_schedules,
          :languages,
          :phones
        ])
      render json: full_location
    end

    # POST /locations
    def create
      @location = Location.new(location_params)
      @location.link_instance = current_link_instance

      if @location.save
        render json: @location,
               status: :created,
               location: api_location_url(@location)
      else
        render json: @location.errors, status: :unprocessable_entity
      end
    end

    # POST /api/locations/full
    def create_full
      @location = current_link_instance.locations.build(mapped_location_params)

      if @location.save
        render json: @location,
               status: :created,
               location: api_location_url(@location)
      else
        render json: @location.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /locations/1
    def update
      if @location.update(location_params)
        render json: @location
      else
        render json: @location.errors, status: :unprocessable_entity
      end
    end

    # DELETE /locations/1
    def destroy
      @location.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_location
      @location = current_link_instance.locations.find(params[:id])
    end

    def mapped_location_params
      location_params.tap do |mapped_params|
        # Change the nested param and inject the link instance id
         ['physical_addresses',
          'postal_addresses',
          'service_at_locations',
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
    def location_params
      params.require(:location).permit(LOCATION_PARAMS, physical_addresses: PHYSICAL_ADDRESS_PARAMS,
                                                        postal_addresses: POSTAL_ADDRESS_PARAMS,
                                                        service_at_locations: SERVICE_AT_LOCATION_PARAMS,
                                                        regular_schedules: REGULAR_SCHEDULE_PARAMS,
                                                        holiday_schedules: HOLIDAY_SCHEDULE_PARAMS,
                                                        languages: LANGUAGE_PARAMS,
                                                        phones: PHONE_PARAMS)
    end
  end
end
