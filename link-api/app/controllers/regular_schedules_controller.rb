class RegularSchedulesController < ApplicationController
  before_action :set_regular_schedule, only: [:show, :update, :destroy]

  # GET /regular_schedules
  def index
    @regular_schedules = RegularSchedule.all

    render json: @regular_schedules
  end

  # GET /regular_schedules/1
  def show
    render json: @regular_schedule
  end

  # POST /regular_schedules
  def create
    @regular_schedule = RegularSchedule.new(regular_schedule_params)

    if @regular_schedule.save
      render json: @regular_schedule, status: :created, location: @regular_schedule
    else
      render json: @regular_schedule.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /regular_schedules/1
  def update
    if @regular_schedule.update(regular_schedule_params)
      render json: @regular_schedule
    else
      render json: @regular_schedule.errors, status: :unprocessable_entity
    end
  end

  # DELETE /regular_schedules/1
  def destroy
    @regular_schedule.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_regular_schedule
      @regular_schedule = RegularSchedule.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def regular_schedule_params
      params.require(:regular_schedule).permit(:service_id, :location_id, :service_at_location, :weekday, :opens_at, :closes_at)
    end
end
