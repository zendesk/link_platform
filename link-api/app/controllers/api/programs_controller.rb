class Api::ProgramsController < ApplicationController
  before_action :set_program, only: [:show, :update, :destroy]

  # GET /programs
  def index
    @programs = current_link_instance.programs.all

    render json: @programs
  end

  # GET /programs/1
  def show
    render json: @program
  end

  # POST /programs
  def create
    @program = Program.new(program_params)
    @program.link_instance = current_link_instance

    if @program.save
      render json: @program, status: :created, location: api_program_url(@program)
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
      params.require(:program).permit(:name, :alternate_name, :organization_id)
    end
end
