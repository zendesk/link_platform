# frozen_string_literal: true

class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts, id: :uuid do |t|
      t.references :organization, foreign_key: true, type: :uuid
      t.references :service, foreign_key: true, type: :uuid
      t.references :service_at_location, foreign_key: true, type: :uuid
      t.references :link_instance, foreign_key: true, type: :uuid
      t.string :name
      t.string :title
      t.string :department
      t.string :email

      t.timestamps
    end
  end
end
