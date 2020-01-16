# frozen_string_literal: true

module Api
  class ContactsController < ApiBaseController

    before_action :set_contact, only: %i[show update destroy]

    # GET /api/contacts
    def index
      @contacts = current_link_instance.contacts

      render json: @contacts
    end

    # GET /api/contacts/1
    def show
      render json: @contact
    end

    # POST /api/contacts
    def create
      @contact = current_link_instance.contacts.build(contact_params)

      if @contact.save
        render json: @contact,
               status: :created,
               location: api_contact_url(@contact)
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
      @contact = current_link_instance.contacts.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def contact_params
      params.require(:contact).permit(CONTACT_PARAMS)
    end
  end
end
