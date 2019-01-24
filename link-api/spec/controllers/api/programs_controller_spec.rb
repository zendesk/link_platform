require 'rails_helper'

RSpec.describe Api::ProgramsController, type: :controller do
  let(:link_instance) { create(:link_instance) }
  let(:program) { create(:program, link_instance: link_instance) }
  let(:organization) { create(:organization) }
  let(:admin) { create(:admin, link_instance: link_instance) }

  # This should return the minimal set of attributes required to create a valid
  # Program. As you add validations to Program, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    {
      organization_id: organization.id,
      name: "Legal program",
    }
  }

  let(:invalid_attributes) {
    {
      organization_id: nil,
      name: "Invalid"
    }
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # ProgramsController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  before do
    login admin
    allow_any_instance_of(ApplicationController).to receive(:current_link_instance).and_return(link_instance)
  end

  describe "GET #index" do
    it "returns a success response" do
      get :index, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "GET #show" do
    it "returns a success response" do
      get :show, params: {id: program.to_param}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Program" do
        expect {
          post :create, params: {program: valid_attributes}, session: valid_session
        }.to change(Program, :count).by(1)
      end

      it "renders a JSON response with the new program" do

        post :create, params: {program: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
        expect(response.location).to eq(api_program_url(Program.last))
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the new program" do

        post :create, params: {program: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        {
          name: 'Canonball'
        }
      }

      it "updates the requested program" do
        put :update, params: {id: program.to_param, program: new_attributes}, session: valid_session
        program.reload
        expect(program.name).to eq('Canonball')
      end

      it "renders a JSON response with the program" do

        put :update, params: {id: program.to_param, program: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested program" do
      program.save!
      expect {
        delete :destroy, params: {id: program.to_param}, session: valid_session
      }.to change(Program, :count).by(-1)
    end
  end
end
