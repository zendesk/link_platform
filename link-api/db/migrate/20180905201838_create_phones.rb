# frozen_string_literal: true

class CreatePhones < ActiveRecord::Migration[5.2]
  def change
    create_table :phones do |t|
      t.string :link_instance_id, null: false
      t.string :location_id
      t.string :service_id
      t.string :organization_id
      t.string :contact_id
      t.string :service_at_location_id
      t.string :number, null: false
      t.integer :extension
      t.string :phone_type
      t.string :language
      t.string :description

      t.timestamps
    end
  end
end
