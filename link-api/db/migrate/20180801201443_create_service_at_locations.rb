# frozen_string_literal: true

class CreateServiceAtLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :service_at_locations, id: :uuid do |t|
      t.references :service, foreign_key: true, type: :uuid
      t.references :location, foreign_key: true, type: :uuid
      t.references :link_instance, foreign_key: true, type: :uuid
      t.string :description

      t.timestamps
    end
  end
end
