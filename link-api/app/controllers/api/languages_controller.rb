# frozen_string_literal: true

module Api
  class LanguagesController < ApplicationController
    before_action :set_language, only: %i[show update destroy]

    # GET /api/languages
    def index
      @languages = current_link_instance.languages

      render json: @languages
    end

    # GET /api/languages/1
    def show
      render json: @language
    end

    # POST /api/languages
    def create
      @language = current_link_instance.languages.build(language_params)

      if @language.save
        render json: @language,
               status: :created,
               location: api_language_url(@language)
      else
        render json: @language.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /api/languages/1
    def update
      if @language.update(language_params)
        render json: @language
      else
        render json: @language.errors, status: :unprocessable_entity
      end
    end

    # DELETE /api/languages/1
    def destroy
      @language.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_language
      @language = current_link_instance.languages.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def language_params
      params.require(:language).permit(:service_id, :location_id, :language)
    end
  end
end
