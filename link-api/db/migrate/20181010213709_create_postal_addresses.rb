# frozen_string_literal: true

class CreatePostalAddresses < ActiveRecord::Migration[5.2]
  # location ref is null a physical address can exist in the system even if the location has changed or been removed
  # address_1 in the old
  def change
    create_table :postal_addresses, id: :uuid do |t|
      t.references :link_instance, foreign_key: true, type: :uuid
      t.string :location_id, null: true
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
