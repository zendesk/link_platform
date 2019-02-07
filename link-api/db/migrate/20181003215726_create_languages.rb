# frozen_string_literal: true

class CreateLanguages < ActiveRecord::Migration[5.2]
  def change
    create_table :languages do |t|
      t.string :link_instance_id, null: false
      t.string :service_id
      t.string :location_id
      t.string :language

      t.timestamps
    end
  end
end
