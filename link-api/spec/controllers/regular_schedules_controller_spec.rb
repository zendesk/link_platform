require 'rails_helper'

RSpec.describe RegularSchedulesController, type: :controller do

  # This should return the minimal set of attributes required to create a valid
  # RegularSchedule. As you add validations to RegularSchedule, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    { weekday: 1 }
  }

  let(:invalid_attributes) {
   { weekday: nil }
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # RegularSchedulesController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe "GET #index" do
    it "returns a success response" do
      regular_schedule = RegularSchedule.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(response).to be_success
    end
  end

  describe "GET #show" do
    it "returns a success response" do
      regular_schedule = RegularSchedule.create! valid_attributes
      get :show, params: {id: regular_schedule.to_param}, session: valid_session
      expect(response).to be_success
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new RegularSchedule" do
        expect {
          post :create, params: {regular_schedule: valid_attributes}, session: valid_session
        }.to change(RegularSchedule, :count).by(1)
      end

      it "renders a JSON response with the new regular_schedule" do

        post :create, params: {regular_schedule: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
        expect(response.location).to eq(regular_schedule_url(RegularSchedule.last))
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the new regular_schedule" do

        post :create, params: {regular_schedule: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        { weekday: 10 }
      }

      it "updates the requested regular_schedule" do
        regular_schedule = RegularSchedule.create! valid_attributes
        put :update, params: {id: regular_schedule.to_param, regular_schedule: new_attributes}, session: valid_session
        regular_schedule.reload
        expect(regular_schedule.weekday).to eq(10)
      end

      it "renders a JSON response with the regular_schedule" do
        regular_schedule = RegularSchedule.create! valid_attributes

        put :update, params: {id: regular_schedule.to_param, regular_schedule: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the regular_schedule" do
        regular_schedule = RegularSchedule.create! valid_attributes

        put :update, params: {id: regular_schedule.to_param, regular_schedule: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested regular_schedule" do
      regular_schedule = RegularSchedule.create! valid_attributes
      expect {
        delete :destroy, params: {id: regular_schedule.to_param}, session: valid_session
      }.to change(RegularSchedule, :count).by(-1)
    end
  end

end
