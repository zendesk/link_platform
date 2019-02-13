# frozen_string_literal: true

class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :alternate_name
      t.string :description
      t.string :transportation
      t.integer :latitude
      t.integer :longitude
      t.string :organization_id

      t.timestamps
    end
  end
end
