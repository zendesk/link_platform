# frozen_string_literal: true

class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations, id: :uuid do |t|
      t.references :organization, foreign_key: true, type: :uuid
      t.references :link_instance, foreign_key: true, type: :uuid
      t.string :name
      t.string :alternate_name
      t.string :description
      t.string :transportation
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
