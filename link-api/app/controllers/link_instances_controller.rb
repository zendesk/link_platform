# frozen_string_literal: true

class LinkInstancesController < ApplicationController
  skip_before_action :assert_link_instance
  skip_before_action :authenticate_admin!
  skip_before_action :assert_admin_domain

  before_action :set_link_instance, only: %i[show update destroy down]

  def index
    @link_instances = LinkInstance.all

    render json: @link_instances
  end

  def show
    render json: @link_instance
  end

  def create
    @link_instance = LinkInstance.new(link_instance_params)

    if @link_instance.save
      render json: @link_instance, status: :created, location: @link_instance
    else
      render json: @link_instance.errors, status: :unprocessable_entity
    end
  end

  def update
    if @link_instance.update(link_instance_params)
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
    params.require(:link_instance).permit(:name, :email, :subdomain, :logo)
  end
end
