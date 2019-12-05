# frozen_string_literal: true

module Api
  class TaxonomiesController < ApplicationController
    ALLOWED_PARAMS = %i[
      name
      parent_id
      parent_name
      vocabulary
    ].freeze

    before_action :set_taxonomy, only: %i[show update destroy]

    # GET /api/taxonomies
    def index
      @taxonomies = current_link_instance.taxonomies

      render json: @taxonomies
    end

    # GET /api/taxonomies/1
    def show
      render json: @taxonomy
    end

    # POST /api/taxonomies
    def create
      @taxonomy = current_link_instance.taxonomies.build(taxonomy_params)

      if @taxonomy.save
        render json: @taxonomy,
               status: :created,
               location: api_taxonomy_url(@taxonomy)
      else
        render json: @taxonomy.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /api/taxonomies/1
    def update
      if @taxonomy.update(taxonomy_params)
        render json: @taxonomy
      else
        render json: @taxonomy.errors, status: :unprocessable_entity
      end
    end

    # DELETE /api/taxonomies/1
    def destroy
      @taxonomy.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_taxonomy
      @taxonomy = current_link_instance.taxonomies.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def taxonomy_params
      params.require(:taxonomy).permit(ALLOWED_PARAMS)
    end
  end
end
