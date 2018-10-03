class SettingsController < ApplicationController
  before_action :set_settings, only: [:show, :update, :destroy]

  def index
    @settings = Settings.all

    render json: @settings
  end

  def show
    render json: @settings
  end

  def create
    @settings = Settings.new(settings_params)
    @settings.link_instance = current_link_instance

    if @settings.save
      render json: @settings, status: :created, location: @settings
    else
      render json: @settings.errors, status: :unprocessable_entity
    end
  end

  def update
    if @settings.update(settings_params)
      render json: @settings
    else
      render json: @settings.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @settings.destroy
  end

  def set_settings
    @settings = current_link_instance.settings
  end

  def settings_params
    params.require(:settings).permit(:feedback_email, :theme_color, :button_color)
  end
end
