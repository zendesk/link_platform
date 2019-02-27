# frozen_string_literal: true

class CreateServices < ActiveRecord::Migration[5.2]
  def change
    create_table :services, id: :uuid do |t|
      t.references :organization, foreign_key: true, type: :uuid
      t.references :program, foreign_key: true, type: :uuid
      t.references :link_instance, foreign_key: true, type: :uuid
      t.string :name, null: false
      t.string :alternate_name
      t.string :description
      t.string :url
      t.string :email
      t.string :status, null: false
      t.string :interpretation_services
      t.string :application_services
      t.string :wait_time
      t.string :fees
      t.string :accreditations
      t.string :licenses

      t.timestamps
    end
  end
end
