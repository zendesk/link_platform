class SettingsController < ApplicationController

  def index
    @settings = Settings.all

    render json: @settings
  end

  def show
    render json: @settings
  end

  def create
    @settings = Settings.new(settings_params)

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
end
