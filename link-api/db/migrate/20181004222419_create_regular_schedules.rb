# frozen_string_literal: true

class CreateRegularSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :regular_schedules, id: :uuid do |t|
      t.references :link_instance, foreign_key: true, type: :uuid
      t.references :service, foreign_key: true, type: :uuid
      t.references :location, foreign_key: true, type: :uuid
      t.references :service_at_location, foreign_key: true, type: :uuid
      t.integer :weekday, null: false
      t.datetime :opens_at
      t.datetime :closes_at

      t.timestamps
    end
  end
end
