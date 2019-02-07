# frozen_string_literal: true

module Api
  class PostalAddressesController < ApplicationController
    ALLOWED_PARAMS = %i[
      location_id
      attention
      address_1
      city
      region
      state_province
      postal_code
      country
    ].freeze

    before_action :set_postal_address, only: %i[show update destroy]

    # GET /postal_addresses
    def index
      @postal_addresses = current_link_instance.postal_addresses

      render json: @postal_addresses
    end

    # GET /postal_addresses/1
    def show
      render json: @postal_address
    end

    # POST /postal_addresses
    def create
      @postal_address = current_link_instance.
                        postal_addresses.
                        build(postal_address_params)

      if @postal_address.save
        render json: @postal_address,
               status: :created,
               location: api_postal_address_url(@postal_address)
      else
        render json: @postal_address.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /postal_addresses/1
    def update
      if @postal_address.update(postal_address_params)
        render json: @postal_address
      else
        render json: @postal_address.errors, status: :unprocessable_entity
      end
    end

    # DELETE /postal_addresses/1
    def destroy
      @postal_address.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_postal_address
      @postal_address = current_link_instance.postal_addresses.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def postal_address_params
      params.require(:postal_address).permit(ALLOWED_PARAMS)
    end
  end
end
