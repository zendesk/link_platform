# frozen_string_literal: true

module Api
  class EligibilitiesController < ApiBaseController
    before_action :set_eligibility, only: %i[show update destroy]

    # GET /api/eligibilities
    def index
      @eligibilities = current_link_instance.eligibilities

      render json: @eligibilities
    end

    # GET /api/eligibilities/1
    def show
      render json: @eligibility
    end

    # POST /api/eligibilities
    def create
      @eligibility = current_link_instance.eligibilities.build(eligibility_params)

      if @eligibility.save
        render json: @eligibility,
               status: :created,
               location: api_eligibility_url(@eligibility)
      else
        render json: @eligibility.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /api/eligibilities/1
    def update
      if @eligibility.update(eligibility_params)
        render json: @eligibility
      else
        render json: @eligibility.errors, status: :unprocessable_entity
      end
    end

    # DELETE /api/eligibilities/1
    def destroy
      @eligibility.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_eligibility
      @eligibility = current_link_instance.eligibilities.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def eligibility_params
      params.require(:eligibility).permit(ELIGIBILITY_PARAMS)
    end
  end
end
