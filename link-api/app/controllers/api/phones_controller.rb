module Api
  class PhonesController < ApplicationController
    before_action :set_phone, only: [:show, :update, :destroy]

    # GET /phones
    def index
      @phones = current_link_instance.phones

      render json: @phones
    end

    # GET /phones/1
    def show
      render json: @phone
    end

    # POST /phones
    def create
      @phone = current_link_instance.phones.build(phone_params)

      if @phone.save
        render json: @phone, status: :created, location: api_phone_url(@phone)
      else
        render json: @phone.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /phones/1
    def update
      if @phone.update(phone_params)
        render json: @phone
      else
        render json: @phone.errors, status: :unprocessable_entity
      end
    end

    # DELETE /phones/1
    def destroy
      @phone.destroy!
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_phone
      @phone = current_link_instance.phones.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def phone_params
      params.require(:phone).permit(:location_id, :service_id, :organization_id, :contact_id, :service_at_location_id, :number, :extension, :phone_type, :language, :description)
    end
  end
end
