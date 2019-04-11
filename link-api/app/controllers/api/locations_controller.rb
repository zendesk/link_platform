# frozen_string_literal: true

class Api::LocationsController < ApplicationController
  ALLOWED_PARAMS = %i[
    name
    alternate_name
    description
    transportation
    latitude
    longitude
    organization_id
  ].freeze

  before_action :set_location, only: %i[show update destroy]

  # GET /locations
  def index
    @locations = current_link_instance.locations.all

    render json: Api::Paginate::paginate(params[:page], @locations)
  end

  # GET /locations/1
  def show
    render json: @location
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

  # Only allow a trusted parameter "white list" through.
  def location_params
    params.require(:location).permit(ALLOWED_PARAMS)
  end
end
