# frozen_string_literal: true

class Api::ProgramsController < ApplicationController
  ALLOWED_PARAMS = %i[
    name
    alternate_name
    organization_id
  ].freeze

  before_action :set_program, only: %i[show update destroy]

  # GET /programs
  def index
    @programs = current_link_instance.programs.all

    render json: Api::Paginate::paginate(params[:page], @programs)
  end

  # GET /programs/1
  def show
    render json: @program
  end

  # POST /programs
  def create
    @program = current_link_instance.programs.build(program_params)

    if @program.save
      render json: @program,
             status: :created,
             location: api_program_url(@program)
    else
      render json: @program.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /programs/1
  def update
    if @program.update(program_params)
      render json: @program
    else
      render json: @program.errors, status: :unprocessable_entity
    end
  end

  # DELETE /programs/1
  def destroy
    @program.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_program
    @program = current_link_instance.programs.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def program_params
    params.require(:program).permit(ALLOWED_PARAMS)
  end
end
