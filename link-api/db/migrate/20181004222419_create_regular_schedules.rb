# frozen_string_literal: true

class CreateRegularSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :regular_schedules do |t|
      t.string :link_instance_id, null: false
      t.string :service_id
      t.string :location_id
      t.string :service_at_location_id
      t.integer :weekday, null: false
      t.datetime :opens_at
      t.datetime :closes_at

      t.timestamps
    end
  end
end
