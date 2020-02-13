# frozen_string_literal: true

module Api
  class OrganizationsController < ApiBaseController
    before_action :set_organization, only: %i[show show_full update destroy]

    # GET /organizations
    def index
      @organizations = current_link_instance.organizations.all

      render json: @organizations
    end

    # GET /api/organizations/full
    def full
      @organizations = current_link_instance.organizations
      full_organizations = @organizations.to_json(include:
        [
          :contacts,
          :locations,
          :programs,
          :services
        ])
      render json: full_organizations
    end

    # GET /organizations/1
    def show
      render json: @organization
    end

    # GET /api/services/1/full
    def show_full
      full_organization = @organization.to_json(include:
        [
          :contacts,
          :locations,
          :programs,
          :services
        ])
      render json: full_organization
    end

    # POST /organizations
    def create
      @organization = current_link_instance.organizations.build(organization_params)

      if @organization.save
        render json: @organization,
               status: :created,
               location: api_organization_url(@organization)
      else
        render json: @organization.errors, status: :unprocessable_entity
      end
    end

    # POST /api/organizations/full
    def create_full
      @organization = current_link_instance.organizations.build(mapped_organization_params)

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

    def mapped_organization_params
      organization_params.tap do |mapped_params|
        # Change the nested param and inject the link instance id
        ['contacts',
         'locations',
         'programs',
         'services'].each do |key|
          next unless mapped_params.key?(key)

          nested_param = mapped_params.delete(key)

          mapped_params["#{key}_attributes"] = nested_param.map do |param|
            param['link_instance_id'] = current_link_instance.id
            param
          end
        end
      end
    end

    # Only allow a trusted parameter "white list" through.
    def organization_params
      params.require(:organization).permit(ORGANIZATION_PARAMS, contacts: CONTACT_PARAMS,
                                                                locations: LOCATION_PARAMS,
                                                                programs: PROGRAM_PARAMS,
                                                                services: SERVICE_PARAMS)
    end
  end
end
