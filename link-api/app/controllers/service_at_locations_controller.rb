class ServiceAtLocationsController < ApplicationController
  before_action :set_service_at_location, only: [:show, :update, :destroy]

  # GET /service_at_locations
  def index
    @service_at_locations = ServiceAtLocation.all

    render json: @service_at_locations
  end

  # GET /service_at_locations/1
  def show
    render json: @service_at_location
  end

  # POST /service_at_locations
  def create
    @service_at_location = ServiceAtLocation.new(service_at_location_params)

    if @service_at_location.save
      render json: @service_at_location, status: :created, location: @service_at_location
    else
      render json: @service_at_location.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /service_at_locations/1
  def update
    if @service_at_location.update(service_at_location_params)
      render json: @service_at_location
    else
      render json: @service_at_location.errors, status: :unprocessable_entity
    end
  end

  # DELETE /service_at_locations/1
  def destroy
    @service_at_location.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_service_at_location
      @service_at_location = ServiceAtLocation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def service_at_location_params
      params.require(:service_at_location).permit(:service_id, :location_id, :description)
    end
end
