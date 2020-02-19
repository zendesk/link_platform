# frozen_string_literal: true

module Api
  class PhysicalAddressesController < ApiBaseController
    before_action :set_physical_address, only: %i[show update destroy]

    # GET /physical_addresses
    def index
      @physical_addresses = current_link_instance.physical_addresses

      render json: @physical_addresses
    end

    # GET /physical_addresses/1
    def show
      render json: @physical_address
    end

    # POST /physical_addresses
    def create
      @physical_address = current_link_instance.
                          physical_addresses.
                          build(physical_address_params)

      if @physical_address.save
        render json: @physical_address,
               status: :created,
               location: api_physical_address_url(@physical_address)
      else
        render json: @physical_address.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /physical_addresses/1
    def update
      if @physical_address.update(physical_address_params)
        render json: @physical_address
      else
        render json: @physical_address.errors, status: :unprocessable_entity
      end
    end

    # DELETE /physical_addresses/1
    def destroy
      @physical_address.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_physical_address
      @physical_address = current_link_instance.
                          physical_addresses.
                          find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def physical_address_params
      params.require(:physical_address).permit(PHYSICAL_ADDRESS_PARAMS)
    end
  end
end
