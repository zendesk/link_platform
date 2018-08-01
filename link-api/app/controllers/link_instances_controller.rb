class LinkInstancesController < ApplicationController
  before_action :set_link_instance, only: [:show, :update, :destroy]

  def index
    @link_instances = LinkInstance.all

    render json: @link_instances
  end

  def show
    render json: @link_instance
  end

  def create
    @link_instance = LinkInstance.new(params)

    if @link_instance.save
      render json: @link_instance, status: :created, location: @link_instance
    else
      render json: @link_instance.errors, status: :unprocessable_entity
    end
  end

  def update
    if @link_instance.update(params)
      render json: @link_instance
    else
      render json: @link_instance.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @link_instance.destroy
  end

  private

  def set_link_instance
    @link_instance = LinkInstance.find(params[:id])
  end

  def link_instance_params
    params.require(:link_instance).permit(:name, :email, :subdomain)
  end
end
