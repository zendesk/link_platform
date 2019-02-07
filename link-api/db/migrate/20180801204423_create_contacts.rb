# frozen_string_literal: true

class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :organization_id
      t.string :service_id
      t.string :service_at_location_id
      t.string :name
      t.string :title
      t.string :department
      t.string :email

      t.timestamps
    end
  end
end
