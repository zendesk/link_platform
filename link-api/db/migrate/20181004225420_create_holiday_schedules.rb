# frozen_string_literal: true

class CreateHolidaySchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :holiday_schedules, id: :uuid do |t|
      t.references :link_instance, foreign_key: true, type: :uuid
      t.references :service, foreign_key: true, type: :uuid
      t.references :location, foreign_key: true, type: :uuid
      t.references :service_at_location, foreign_key: true, type: :uuid
      t.boolean :closed, null: false
      t.time :opens_at
      t.time :closes_at
      t.date :start_date, null: false
      t.date :end_date, null: false

      t.timestamps
    end
  end
end
