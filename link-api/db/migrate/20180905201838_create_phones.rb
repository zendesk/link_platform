# frozen_string_literal: true

class CreatePhones < ActiveRecord::Migration[5.2]
  def change
    create_table :phones, id: :uuid do |t|
      t.references :link_instance, foreign_key: true, type: :uuid
      t.references :location, foreign_key: true, type: :uuid
      t.references :service, foreign_key: true, type: :uuid
      t.references :organization, foreign_key: true, type: :uuid
      t.references :contact, foreign_key: true, type: :uuid
      t.references :service_at_location, foreign_key: true, type: :uuid
      t.string :number, null: false
      t.integer :extension
      t.string :phone_type
      t.string :language
      t.string :description

      t.timestamps
    end
  end
end
