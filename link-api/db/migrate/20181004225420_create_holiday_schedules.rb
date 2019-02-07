# frozen_string_literal: true

class CreateHolidaySchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :holiday_schedules do |t|
      t.string :link_instance_id, null: false
      t.string :service_id
      t.string :location_id
      t.string :service_at_location_id
      t.boolean :closed, null: false
      t.time :opens_at
      t.time :closes_at
      t.date :start_date, null: false
      t.date :end_date, null: false

      t.timestamps
    end
  end
end
