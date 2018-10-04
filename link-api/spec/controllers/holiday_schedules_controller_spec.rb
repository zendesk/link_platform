require 'rails_helper'

RSpec.describe Api::HolidaySchedulesController, type: :controller do
  let(:link_instance) { create(:link_instance) }

  # This should return the minimal set of attributes required to create a valid
  # HolidaySchedule. As you add validations to HolidaySchedule, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    {
      closed: false,
      start_date: "2018-01-01",
      end_date: "2018-12-31"
    }
  }

  let(:invalid_attributes) {
    {
      start_date: "foo"
    }
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # HolidaySchedulesController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  before do
    allow_any_instance_of(ApplicationController).to receive(:current_link_instance).and_return(link_instance)
  end

  describe "GET #index" do
    let(:holiday_schedule) { create(:holiday_schedule, link_instance: link_instance) }

    it "returns a success response" do
      get :index, params: {}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "GET #show" do
    let(:holiday_schedule) { create(:holiday_schedule, link_instance: link_instance) }

    it "returns a success response" do
      get :show, params: {id: holiday_schedule.to_param}, session: valid_session
      expect(response).to be_successful
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new HolidaySchedule" do
        expect {
          post :create, params: {holiday_schedule: valid_attributes}, session: valid_session
        }.to change(HolidaySchedule, :count).by(1)
      end

      it "renders a JSON response with the new holiday_schedule" do

        post :create, params: {holiday_schedule: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
        expect(response.location).to eq(api_holiday_schedule_url(HolidaySchedule.last))
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the new holiday_schedule" do

        post :create, params: {holiday_schedule: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "PUT #update" do
    let(:holiday_schedule) { create(:holiday_schedule, link_instance: link_instance) }

    context "with valid params" do
      let(:new_attributes) {
        {
          closed: true
        }
      }

      it "updates the requested holiday_schedule" do
        put :update, params: {id: holiday_schedule.to_param, holiday_schedule: new_attributes}, session: valid_session
        holiday_schedule.reload

        expect(holiday_schedule.closed).to eq(true)
      end

      it "renders a JSON response with the holiday_schedule" do
        put :update, params: {id: holiday_schedule.to_param, holiday_schedule: valid_attributes}, session: valid_session
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the holiday_schedule" do
        put :update, params: {id: holiday_schedule.to_param, holiday_schedule: invalid_attributes}, session: valid_session
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "DELETE #destroy" do
    let!(:holiday_schedule) { create(:holiday_schedule, link_instance: link_instance) }

    it "destroys the requested holiday_schedule" do
      expect {
        delete :destroy, params: {id: holiday_schedule.to_param}, session: valid_session
      }.to change(HolidaySchedule, :count).by(-1)
    end
  end

end
