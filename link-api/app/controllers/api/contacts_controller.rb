module Api
  class ContactsController < ApplicationController
    before_action :set_contact, only: [:show, :update, :destroy]

    # GET /api/contacts
    def index
      @contacts = Contact.all

      render json: @contacts
    end

    # GET /api/contacts/1
    def show
      render json: @contact
    end

    # POST /api/contacts
    def create
      @contact = Contact.new(contact_params)

      if @contact.save
        render json: @contact, status: :created, location: api_contact_url(@contact)
      else
        render json: @contact.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /api/contacts/1
    def update
      if @contact.update(contact_params)
        render json: @contact
      else
        render json: @contact.errors, status: :unprocessable_entity
      end
    end

    # DELETE /api/contacts/1
    def destroy
      @contact.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_contact
      @contact = Contact.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def contact_params
      params.require(:contact).permit(:organization_id, :service_id, :service_at_location_id, :name, :title, :department, :email)
    end
  end
end
