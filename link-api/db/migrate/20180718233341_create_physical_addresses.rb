# frozen_string_literal: true

class CreatePhysicalAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :physical_addresses, id: :uuid do |t|
      t.references :location, foreign_key: true, type: :uuid
      t.references :link_instance, foreign_key: true, type: :uuid
      t.string :attention
      t.string :address_1, null: false
      t.string :city, null: false
      t.string :region
      t.string :state_province, null: false
      t.string :postal_code, null: false
      t.string :country, null: false

      t.timestamps
    end
  end
end
