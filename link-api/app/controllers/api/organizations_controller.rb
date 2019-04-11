# frozen_string_literal: true

class Api::OrganizationsController < ApplicationController
  ALLOWED_PARAMS = %i[
    name
    alternate_name
    description
    email
    url
    tax_status
    tax_id
    year_incorporated
    legal_status
  ].freeze

  before_action :set_organization, only: %i[show update destroy]

  # GET /organizations
  def index
    @organizations = current_link_instance.organizations

    render json: Api::Paginate::paginate(params[:page], @organizations)
  end

  # GET /organizations/1
  def show
    render json: @organization
  end

  # POST /organizations
  def create
    @organization = current_link_instance.
                    organizations.
                    build(organization_params)

    if @organization.save
      render json: @organization,
             status: :created,
             location: api_organization_url(@organization)
    else
      render json: @organization.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /organizations/1
  def update
    if @organization.update(organization_params)
      render json: @organization
    else
      render json: @organization.errors, status: :unprocessable_entity
    end
  end

  # DELETE /organizations/1
  def destroy
    @organization.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_organization
    @organization = current_link_instance.organizations.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def organization_params
    params.require(:organization).permit(ALLOWED_PARAMS)
  end
end
