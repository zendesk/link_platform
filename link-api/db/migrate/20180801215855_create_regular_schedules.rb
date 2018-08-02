class CreateRegularSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :regular_schedules do |t|
      t.string :service_id
      t.string :location_id
      t.string :service_at_location_id
      t.integer :weekday, null: false
      t.time :opens_at
      t.time :closes_at

      t.timestamps
    end
  end
end
