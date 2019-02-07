# frozen_string_literal: true

class CreateServiceAtLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :service_at_locations do |t|
      t.string :service_id, null: false
      t.string :location_id, null: false
      t.string :description

      t.timestamps
    end
  end
end
