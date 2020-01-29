# frozen_string_literal: true

module Api
  class HolidaySchedulesController < ApiBaseController
    before_action :set_holiday_schedule, only: %i[show update destroy]

    # GET /holiday_schedules
    def index
      @holiday_schedules = current_link_instance.holiday_schedules

      render json: @holiday_schedules
    end

    # GET /holiday_schedules/1
    def show
      render json: @holiday_schedule
    end

    # POST /holiday_schedules
    def create
      @holiday_schedule = current_link_instance.
                          holiday_schedules.
                          build(holiday_schedule_params)

      if @holiday_schedule.save
        render json: @holiday_schedule,
               status: :created,
               location: api_holiday_schedule_url(@holiday_schedule)
      else
        render json: @holiday_schedule.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /holiday_schedules/1
    def update
      if @holiday_schedule.update(holiday_schedule_params)
        render json: @holiday_schedule
      else
        render json: @holiday_schedule.errors, status: :unprocessable_entity
      end
    end

    # DELETE /holiday_schedules/1
    def destroy
      @holiday_schedule.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_holiday_schedule
      @holiday_schedule = current_link_instance.
                          holiday_schedules.
                          find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def holiday_schedule_params
      params.require(:holiday_schedule).permit(HOLIDAY_SCHEDULE_PARAMS)
    end
  end
end
